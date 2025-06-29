
import { Calendar, Home, Inbox, Search, Settings, Shield, Activity, Download, BarChart3, Flame, Gamepad2, TreePine, Wrench, Wallet, Globe } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "💰 GAiA Wallet",
    url: "/wallet",
    icon: Wallet,
  },
  {
    title: "🌍 Virtual World", 
    url: "/virtual-world",
    icon: Globe,
  },
  {
    title: "System Status", 
    url: "/system-status",
    icon: Settings,
  },
  {
    title: "Comprehensive Status",
    url: "/comprehensive-status", 
    icon: BarChart3,
  },
  {
    title: "Ultimate Security",
    url: "/ultimate-security",
    icon: Shield,
  },
  {
    title: "Live Tracking",
    url: "/live-tracking",
    icon: Activity,
  },
  {
    title: "🔥 Coin Crafter",
    url: "/coin-crafter",
    icon: Flame,
  },
  {
    title: "🔥 Transparency Center",
    url: "/transparency",
    icon: Download,
  },
  {
    title: "🎮 Gaming Arena",
    url: "/gaming",
    icon: Gamepad2,
  },
  {
    title: "🏗️ Landscape Builder",
    url: "/landscape-builder",
    icon: TreePine,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>🌍 GAIA Ecosystem - Token Burning Paradise</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
