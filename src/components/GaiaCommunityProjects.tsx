
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Leaf, Users, Target, DollarSign, Clock, Award } from 'lucide-react'
import { useGaiaTokenData } from '@/hooks/useGaiaTokenData'
import { GAIA_PROJECTS } from '@/constants/gaia-projects'

interface Project {
  id: string
  title: string
  description: string
  category: string
  fundingGoal: number
  currentFunding: number
  backers: number
  daysLeft: number
  impact: string
}

export function GaiaCommunityProjects() {
  const { tokenData, isLoading, error } = useGaiaTokenData(true)
  
  // Use projects from constants and derive funding from GAiA token data
  const [projects, setProjects] = useState<Project[]>(
    GAIA_PROJECTS.map(project => ({
      id: project.id,
      title: project.title,
      description: project.description,
      category: project.category,
      fundingGoal: project.reward * 100, // Scale up for project funding
      currentFunding: Math.floor((project.progress / 100) * project.reward * 100),
      backers: project.participants,
      daysLeft: Math.ceil((new Date(project.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
      impact: `Expected to impact ${project.participants.toLocaleString()} participants`
    }))
  )

  const [animatedProjects, setAnimatedProjects] = useState(projects)

  useEffect(() => {
    // Update projects when tokenData changes to reflect real GAiA token activity
    if (tokenData) {
      const activityMultiplier = tokenData.transactions24h / 50000 // Use transaction activity
      
      setAnimatedProjects(prev => 
        prev.map(project => ({
          ...project,
          currentFunding: Math.min(
            project.fundingGoal,
            project.currentFunding + Math.floor(activityMultiplier * 100)
          ),
          backers: project.backers + Math.floor(activityMultiplier * 2)
        }))
      )
    }
  }, [tokenData])

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-4">
          🌱 Community Impact Projects
        </h2>
        <p className="text-muted-foreground">
          Support real-world environmental projects that make a measurable difference
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animatedProjects.map((project) => {
          const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100
          const isNearingGoal = fundingPercentage > 80

          return (
            <Card 
              key={project.id}
              className={`bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30 transition-all duration-300 hover:scale-105 ${
                isNearingGoal ? 'ring-2 ring-green-400/50' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-600">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-orange-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{project.daysLeft} days</span>
                  </div>
                </div>
                <CardTitle className="text-green-400">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-green-300/80">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Funding Progress</span>
                    <span className="text-green-300">
                      ${project.currentFunding.toLocaleString()} / ${project.fundingGoal.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={fundingPercentage} className="h-2" />
                  <div className="text-xs text-green-300/60">
                    {fundingPercentage.toFixed(1)}% funded
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-blue-400">
                    <Users className="h-4 w-4" />
                    {project.backers} backers
                  </div>
                  <div className="flex items-center gap-1 text-purple-400">
                    <Target className="h-4 w-4" />
                    Impact Goal
                  </div>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Expected Impact</span>
                  </div>
                  <p className="text-sm text-emerald-300/80">{project.impact}</p>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    <DollarSign className="h-4 w-4 mr-1" />
                    Back Project
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-green-400 text-green-400 hover:bg-green-900/20"
                    size="sm"
                  >
                    <Leaf className="h-4 w-4 mr-1" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
          <Target className="h-5 w-5 mr-2" />
          View All Projects
        </Button>
      </div>
    </div>
  )
}
