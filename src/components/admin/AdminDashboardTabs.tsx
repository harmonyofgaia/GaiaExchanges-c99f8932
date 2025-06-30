
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { AdminDashboard } from './AdminDashboard'
import { AdvancedSecurityCenter } from './AdvancedSecurityCenter'
import { UltimateSecuritySuite } from './UltimateSecuritySuite'
import { FutureReadingMachine } from './FutureReadingMachine'
import { QuantumPartnershipEngine } from './QuantumPartnershipEngine'
import { GitHubAdminIntegration } from '../github/GitHubAdminIntegration'
import { EnhancedFutureReadingMachine } from './EnhancedFutureReadingMachine'
import { MediaLibraryManager } from './MediaLibraryManager'
import { InvisibleVPNDisruptor } from './InvisibleVPNDisruptor'
import { UniversalSatelliteTracker } from './UniversalSatelliteTracker'
import { EnhancedSuspiciousTransactions } from './EnhancedSuspiciousTransactions'
import { TransactionReversalSystem } from './TransactionReversalSystem'
import { MasterDefenseOrchestrator } from './MasterDefenseOrchestrator'
import { AdminAnalyticsDashboard } from './AdminAnalyticsDashboard'
import { AutonomousMastermind } from './AutonomousMastermind'
import { WalletConnectionManager } from './WalletConnectionManager'
import { CommunityRecoveryDashboard } from './CommunityRecoveryDashboard'
import { QuantumGlobalSearchEngine } from './QuantumGlobalSearchEngine'
import { QuantumGlobalCommandCenter } from './QuantumGlobalCommandCenter'
import { PhantomRecoveryEngine } from './PhantomRecoveryEngine'

export function AdminDashboardTabs() {
  return (
    <Tabs defaultValue="quantum-search" className="w-full">
      <TabsList className="grid w-full grid-cols-12 mb-6">
        <TabsTrigger value="quantum-search">🔍 Quantum Search</TabsTrigger>
        <TabsTrigger value="quantum-command">👑 Command Center</TabsTrigger>
        <TabsTrigger value="phantom-recovery">🛡️ Phantom Recovery</TabsTrigger>
        <TabsTrigger value="community-recovery">🌍 Community Recovery</TabsTrigger>
        <TabsTrigger value="transparency">🔍 Transparency</TabsTrigger>
        <TabsTrigger value="wallets">💰 Wallet Control</TabsTrigger>
        <TabsTrigger value="master-defense">🧠 Master Defense</TabsTrigger>
        <TabsTrigger value="analytics">📊 Analytics</TabsTrigger>
        <TabsTrigger value="mastermind">🤖 Mastermind</TabsTrigger>
        <TabsTrigger value="dashboard">System Dashboard</TabsTrigger>
        <TabsTrigger value="security">Advanced Security</TabsTrigger>
        <TabsTrigger value="ultimate">Ultimate Suite</TabsTrigger>
      </TabsList>
      
      <TabsContent value="quantum-search">
        <QuantumGlobalSearchEngine />
      </TabsContent>

      <TabsContent value="quantum-command">
        <QuantumGlobalCommandCenter />
      </TabsContent>

      <TabsContent value="phantom-recovery">
        <PhantomRecoveryEngine />
      </TabsContent>
      
      <TabsContent value="community-recovery">
        <CommunityRecoveryDashboard />
      </TabsContent>

      <TabsContent value="transparency">
        <EnhancedSuspiciousTransactions />
      </TabsContent>

      <TabsContent value="wallets">
        <WalletConnectionManager />
      </TabsContent>

      <TabsContent value="master-defense">
        <MasterDefenseOrchestrator />
      </TabsContent>

      <TabsContent value="analytics">
        <AdminAnalyticsDashboard />
      </TabsContent>

      <TabsContent value="mastermind">
        <AutonomousMastermind />
      </TabsContent>
      
      <TabsContent value="dashboard">
        <AdminDashboard />
      </TabsContent>
      
      <TabsContent value="security">
        <AdvancedSecurityCenter />
      </TabsContent>
      
      <TabsContent value="ultimate">
        <UltimateSecuritySuite />
      </TabsContent>
    </Tabs>
  )
}
