import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Bell, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import LandingHeader from "@/components/LandingHeader";

const Landing = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Smart Claim Filing",
      description: "Upload documents and let AI extract information automatically",
    },
    {
      icon: Shield,
      title: "Real-time Tracking",
      description: "Track your claims with visual timeline and instant updates",
    },
    {
      icon: Bell,
      title: "Instant Notifications",
      description: "Get notified about every status change and update",
    },
    {
      icon: Sparkles,
      title: "AI Assistant",
      description: "24/7 AI support to answer your insurance questions",
    },
  ];

  const benefits = [
    "File claims in under 2 minutes",
    "AI-powered document processing",
    "Real-time claim status updates",
    "Secure document storage",
    "Expert AI assistance",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <LandingHeader />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-24 md:py-32 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up backdrop-blur-sm border border-primary/20">
              <Sparkles className="h-4 w-4" />
              AI-Powered Insurance Claims
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Insurance Claims Made
              <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
                Simple & Fast
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              File, track, and manage your insurance claims with AI automation. 
              Get approved faster with intelligent document processing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/signup">
                <Button size="lg" variant="gradient" className="text-lg px-10 py-6 h-auto group hover:scale-105 transition-all shadow-strong">
                  Start Your Claim 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 h-auto hover:bg-primary/5 hover:scale-105 transition-all">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined claim management with powerful AI features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border card-3d bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all animate-scale-in group" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-medium">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">claimGuard</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience the future of insurance claim management with our intelligent platform
                designed to save you time and reduce complexity.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-all animate-fade-in-up group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 group-hover:bg-success/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/signup">
                <Button size="lg" variant="gradient" className="text-lg px-10 py-6 h-auto group hover:scale-105 transition-all shadow-strong">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
              <Card className="shadow-strong border-border relative backdrop-blur-sm bg-card/80 card-3d">
                <CardContent className="p-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-6 group">
                      <div className="h-20 w-20 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-medium">
                        <FileCheck className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Average Processing Time</div>
                        <div className="text-4xl font-bold text-foreground">2 mins</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="h-20 w-20 rounded-2xl bg-gradient-success flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-medium">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Claims Processed</div>
                        <div className="text-4xl font-bold text-foreground">50,000+</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="h-20 w-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Sparkles className="h-10 w-10 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">AI Accuracy</div>
                        <div className="text-4xl font-bold text-foreground">98.5%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Ready to Simplify Your Claims?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Join thousands of users who trust claimGuard for their insurance needs
            </p>
            <Link to="/signup">
              <Button size="lg" variant="gradient" className="text-lg px-10 py-6 h-auto group hover:scale-105 transition-all shadow-strong animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Create Free Account 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
