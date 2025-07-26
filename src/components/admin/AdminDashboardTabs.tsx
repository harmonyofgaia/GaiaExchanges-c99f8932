
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AdminControlSystem } from '@/components/AdminControlSystem'
import { RefactoredAdminTools } from './RefactoredAdminTools'
import { UltimateSecurity } from './UltimateSecurity'
import { AdminRecoveryPortal } from '@/components/security/AdminRecoveryPortal'
import { PlanRecoverySystem } from './PlanRecoverySystem'
import { HolisticAnalysis } from './HolisticAnalysis'
import { AnimalWelfareControlPanel } from './AnimalWelfareControlPanel'
import { SessionSettingsPanel } from './SessionSettingsPanel'

export function AdminDashboardTabs() {
  return (
    <Tabs defaultValue="control" className="w-full">
      <TabsList className="grid w-full grid-cols-8">
        <TabsTrigger value="control">Control Center</TabsTrigger>
        <TabsTrigger value="session">⏰ Session</TabsTrigger>
        <TabsTrigger value="animal-welfare">🐾 Animal Welfare</TabsTrigger>
        <TabsTrigger value="security">Security Suite</TabsTrigger>
        <TabsTrigger value="tools">Admin Tools</TabsTrigger>
        <TabsTrigger value="recovery">Recovery Portal</TabsTrigger>
        <TabsTrigger value="plans">Plan Recovery</TabsTrigger>
        <TabsTrigger value="analysis">Deep Analysis</TabsTrigger>
      </TabsList>

      <TabsContent value="control" className="space-y-6">
        <AdminControlSystem />
      </TabsContent>

      <TabsContent value="session" className="space-y-6">
        <SessionSettingsPanel />
      </TabsContent>

      <TabsContent value="animal-welfare" className="space-y-6">
        <AnimalWelfareControlPanel />
      </TabsContent>

      <TabsContent value="security" className="space-y-6">
        <UltimateSecurity />
      </TabsContent>

      <TabsContent value="tools" className="space-y-6">
        <RefactoredAdminTools />
      </TabsContent>

      <TabsContent value="recovery" className="space-y-6">
        <AdminRecoveryPortal />
      </TabsContent>

      <TabsContent value="plans" className="space-y-6">
        <PlanRecoverySystem />
      </TabsContent>

      <TabsContent value="analysis" className="space-y-6">
        <HolisticAnalysis />
      </TabsContent>
    </Tabs>
  )
}
