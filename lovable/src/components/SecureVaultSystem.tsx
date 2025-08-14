import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Vault, Shield, Lock, Zap, Eye, Users, DollarSign, Key } from "lucide-react";
import { toast } from "sonner";

export function SecureVaultSystem() {
  const [vaultBalance, setVaultBalance] = useState(2847239.5);
  const [activeInvestors, setActiveInvestors] = useState(1247);
  const [securityLevel, setSecurityLevel] = useState(99.8);
  const [vaultDepth, setVaultDepth] = useState(2847); // meters underground
  const [showVaultAccess, setShowVaultAccess] = useState(false);
  const [vaultPassword, setVaultPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setVaultBalance((prev) => prev + (Math.random() * 1000 + 100));
      setActiveInvestors((prev) => prev + Math.floor(Math.random() * 5));
      setSecurityLevel((prev) => Math.min(100, prev + Math.random() * 0.1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const depositToVault = () => {
    toast.success("💰 DEPOSIT SECURED IN UNDERGROUND VAULT!", {
      description:
        "Your investment has been secured 2847 meters underground with quantum encryption",
      duration: 5000,
    });
  };

  const handleVaultAccess = () => {
    if (vaultPassword === "harmonyquantumvaultaccess") {
      toast.success("🔓 COMMUNITY VAULT ACCESS GRANTED!", {
        description: "Welcome to the Harmony Quantum Vault - Fees can now be directed here",
        duration: 5000,
      });
      setShowVaultAccess(false);
      setVaultPassword("");
    } else {
      toast.error("🚫 VAULT ACCESS DENIED", {
        description: "Invalid vault password - Quantum protection active",
        duration: 5000,
      });
      setVaultPassword("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Underground Vault Visualization */}
      <Card className="border-2 border-green-500/50 bg-gradient-to-br from-black via-green-900/20 to-blue-900/20 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-400">
            <Vault className="h-6 w-6" />
            🏦 HARMONY OF GAIA - SECURE UNDERGROUND VAULT
          </CardTitle>
          <p className="text-green-300">
            {vaultDepth} meters underground • Quantum protected • Full transparency • Global
            community vault
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Vault Illustration */}
          <div className="relative h-96 bg-gradient-to-b from-green-900/20 via-black to-green-900/30 rounded-lg border border-green-500/30 overflow-hidden">
            {/* Ground Level */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-green-600/30 to-blue-600/30 border-b border-green-500/20" />
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400">
              Ground Level
            </div>

            {/* Depth Indicators */}
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className="absolute left-2 text-xs text-green-400/60"
                style={{ top: `${20 + i * 30}px` }}
              >
                -{(i + 1) * 284} m
              </div>
            ))}

            {/* Vault Chamber */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-br from-green-800/40 to-blue-800/40 rounded-lg border-2 border-green-500/50 flex items-center justify-center">
              <div className="text-center">
                <Vault className="h-12 w-12 text-green-400 mx-auto mb-2 animate-pulse" />
                <div className="text-lg font-bold text-green-400">SECURE VAULT</div>
                <div className="text-sm text-green-300">${vaultBalance.toLocaleString()}</div>
                <div className="text-xs text-blue-400">Quantum Encrypted</div>
              </div>
            </div>

            {/* Security Layers */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-72 h-4 bg-red-600/20 rounded border border-red-500/30" />
            <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-80 h-4 bg-orange-600/20 rounded border border-orange-500/30" />
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-88 h-4 bg-yellow-600/20 rounded border border-yellow-500/30" />

            {/* Animated Security Beams */}
            <div className="absolute bottom-12 left-1/4 w-1 h-12 bg-green-400/50 animate-pulse" />
            <div
              className="absolute bottom-12 right-1/4 w-1 h-12 bg-blue-400/50 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Vault Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-green-500/20 bg-green-900/20">
              <CardContent className="p-4 text-center">
                <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400">
                  ${vaultBalance.toLocaleString()}
                </div>
                <div className="text-sm text-green-300">Total Secured</div>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-blue-900/20">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400">{activeInvestors}</div>
                <div className="text-sm text-blue-300">Active Investors</div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20 bg-purple-900/20">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-400">
                  {securityLevel.toFixed(1)}%
                </div>
                <div className="text-sm text-purple-300">Security Level</div>
                <Progress value={securityLevel} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="border-orange-500/20 bg-orange-900/20">
              <CardContent className="p-4 text-center">
                <Vault className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-400">{vaultDepth}m</div>
                <div className="text-sm text-orange-300">Underground</div>
              </CardContent>
            </Card>
          </div>

          {/* Community Vault Access */}
          {showVaultAccess && (
            <Card className="border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-900/30 to-orange-900/30">
              <CardContent className="p-4 space-y-4">
                <div className="text-center">
                  <Key className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-lg font-bold text-yellow-400">Community Vault Access</h3>
                  <p className="text-sm text-yellow-300">
                    Enter vault password to direct fees to community vault
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vaultPassword" className="text-yellow-300">
                    Vault Password
                  </Label>
                  <Input
                    id="vaultPassword"
                    type="password"
                    value={vaultPassword}
                    onChange={(e) => setVaultPassword(e.target.value)}
                    className="bg-black/40 border-yellow-500/30 text-yellow-400"
                    placeholder="Enter vault password..."
                    autoComplete="off"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleVaultAccess}
                    className="flex-1 bg-yellow-600 hover:bg-yellow-700"
                  >
                    <Key className="h-4 w-4 mr-2" />
                    Access Vault
                  </Button>
                  <Button
                    onClick={() => {
                      setShowVaultAccess(false);
                      setVaultPassword("");
                    }}
                    variant="outline"
                    className="border-yellow-500/30"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Deposit Controls */}
          <div className="flex gap-4 justify-center">
            <Button onClick={depositToVault} className="bg-green-600 hover:bg-green-700">
              <Lock className="h-4 w-4 mr-2" />
              SECURE DEPOSIT
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Eye className="h-4 w-4 mr-2" />
              VIEW TRANSPARENCY
            </Button>
            <Button
              onClick={() => setShowVaultAccess(true)}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              <Key className="h-4 w-4 mr-2" />
              COMMUNITY VAULT ACCESS
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Zap className="h-4 w-4 mr-2" />
              INSTANT WITHDRAWAL
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Security Notice */}
      <Card className="border-2 border-yellow-500/50 bg-gradient-to-r from-yellow-900/30 to-orange-900/30">
        <CardContent className="p-4 text-center">
          <h4 className="text-2xl font-bold text-yellow-400 mb-2">
            🛡️ MAXIMUM SECURITY - UNDERGROUND VAULT 🛡️
          </h4>
          <p className="text-sm text-muted-foreground mb-2">
            Your investments are secured 2847 meters underground with quantum encryption. Full
            transparency with live monitoring and instant access when needed.
          </p>
          <p className="text-xs text-yellow-300">
            🔐 Community Vault Password: Users can direct their fees to the community vault for
            global pricing benefits
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
