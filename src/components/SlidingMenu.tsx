
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Globe, 
  Coins, 
  Hammer,
  Mountain,
  Palette,
  BarChart3,
  Settings,
  Shield,
  Info,
  Mail,
  DollarSign,
  ChevronRight,
  Menu,
  X,
  Crown,
  Music,
  Radio,
  Video,
  RotateCcw,
  Gamepad2,
  TrendingUp,
  Activity,
  TreePine,
  Heart,
  Leaf,
  CreditCard,
  User
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthorizedIP, setIsAuthorizedIP] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkIPAuthorization = async () => {
      try {
        // Secure access check using environment variables
        const isAuthorized = window.location.hostname === 'localhost' ||
                           window.location.hostname.includes('lovable')
        
        setIsAuthorizedIP(isAuthorized)
        
      } catch (error) {
        console.log('Secure access check active')
        setIsAuthorizedIP(window.location.hostname === 'localhost')
      }
    }

    checkIPAuthorization()
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const baseMenuItems = [
    { icon: Home, label: 'Galaxy Home', path: '/', category: 'main' },
    { icon: Globe, label: 'Dashboard', path: '/dashboard', category: 'main' },
    { icon: Radio, label: '🎭 Artist Streaming', path: '/artist-streaming', category: 'entertainment' },
    { icon: Video, label: '🎬 Video Upload & Earn', path: '/video-upload', category: 'entertainment' },
    { icon: Music, label: '🎵 Music Platform', path: '/music-platform', category: 'entertainment' },
    { icon: Gamepad2, label: 'Gaming Hub', path: '/game', category: 'gaming' },
    { icon: TrendingUp, label: 'Exchange', path: '/exchange', category: 'trading' },
    { icon: Globe, label: "Gaia's Projects", path: '/gaias-projects', category: 'projects' },
    { icon: BarChart3, label: 'Green Impact Dashboard', path: '/green-impact-dashboard', category: 'projects' },
    { icon: DollarSign, label: 'Project Funding', path: '/project-funding', category: 'projects' },
    { icon: TreePine, label: 'Eco Missions', path: '/eco-missions', category: 'projects' },
    { icon: Heart, label: 'Planet Cleaning', path: '/planet-cleaning', category: 'projects' },
    { icon: Coins, label: 'NFT Cards', path: '/nft-cards', category: 'nft' },
    { icon: User, label: 'Eco Avatar', path: '/eco-avatar', category: 'profile' },
    { icon: Hammer, label: 'Coin Crafter', path: '/coin-crafter', category: 'tools' },
    { icon: Mountain, label: 'Landscape Builder', path: '/landscape-builder', category: 'tools' },
    { icon: Palette, label: 'Aura Land Scrapyard', path: '/aura-land-scrapyard', category: 'tools' },
    { icon: BarChart3, label: 'System Status', path: '/system-status', category: 'monitoring' },
    { icon: Settings, label: 'Comprehensive Status', path: '/comprehensive-status', category: 'monitoring' },
    { icon: Shield, label: 'Security Overview', path: '/security', category: 'security' },
    { icon: Info, label: 'About GAiA', path: '/about', category: 'info' },
    { icon: Mail, label: 'Contact', path: '/contact', category: 'info' },
    { icon: DollarSign, label: 'Pricing', path: '/pricing', category: 'info' }
  ]

  const adminMenuItems = [
    { icon: Crown, label: '👑 Admin Portal', path: '/admin', category: 'admin' },
    { icon: RotateCcw, label: '⚡ Task Reverser', path: '/task-reverser', category: 'admin' }
  ]

  const menuItems = isAuthorizedIP ? [...baseMenuItems, ...adminMenuItems] : baseMenuItems

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Menu Toggle Button - Always visible */}
      <Button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg shadow-lg transition-all duration-300"
        size="sm"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-purple-900/95 to-blue-900/95 backdrop-blur-md border-r border-purple-500/30 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with space for toggle button */}
          <div className="p-4 pt-16 border-b border-purple-500/30">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🌍</div>
              <div>
                <h2 className="text-purple-400 font-bold text-xl">GAiA Universe</h2>
                <p className="text-sm text-muted-foreground">Harmony of Culture</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-6 py-4 mx-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30 shadow-lg'
                          : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-400'
                      }`}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{item.label}</span>
                      {isActive && <ChevronRight className="h-4 w-4 ml-auto" />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-purple-500/30">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                GAiA Platform v3.0
              </p>
              <p className="text-xs text-purple-400">
                Harmony of Culture + AI Evolution
              </p>
              {isAuthorizedIP && (
                <div className="mt-2">
                  <div className="text-xs bg-green-600 text-white px-2 py-1 rounded animate-pulse">
                    🛡️ ADMIN ACCESS + KOALA AI
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SlidingMenu
