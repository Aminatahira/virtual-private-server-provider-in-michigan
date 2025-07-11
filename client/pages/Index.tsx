import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Server,
  Shield,
  Zap,
  Globe,
  Users,
  Cpu,
  HardDrive,
  Clock,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Strategic Midwest Location",
      description:
        "Our servers are located in premium data centers that serve Michigan and surrounding U.S. states with ultra-low latency. Your websites and applications will load faster, respond quicker, and rank higher in local search.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Full Control & Enhanced Security",
      description:
        "You get full root access to your VPS, allowing you to install custom software, manage firewalls, and secure your environment without limits.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "100% Scalable Resources",
      description:
        "Need more RAM or CPU later? No problem. You can scale up anytime without migrating or reinstalling your system.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Great for Michigan Businesses & Creators",
      description:
        "From local shops and bloggers to developers and digital marketers, our VPS hosting is trusted by professionals who want reliable, fast, and local support.",
    },
  ];

  const plans = [
    {
      name: "VPS Starter",
      price: "$12.50/month",
      specs: {
        vcores: "1 vCore",
        ram: "2 GB RAM",
        storage: "20 GB SSD NVMe",
        bandwidth: "250 Mbps",
      },
      description:
        "Great for beginners, portfolio websites, or lightweight apps.",
      features:
        "Fast provisioning and easy OS installation make it ideal for first-time users.",
      buttonText: "Order Starter Plan",
    },
    {
      name: "VPS Value",
      price: "$16.00/month",
      specs: {
        vcores: "1 vCore",
        ram: "2 GB RAM",
        storage: "40 GB SSD NVMe",
        bandwidth: "250 Mbps",
      },
      description:
        "More storage for blogs, landing pages, and development work.",
      features:
        "Excellent for freelancers and students who need more space without more cost.",
      buttonText: "Order Value Plan",
    },
    {
      name: "VPS Essential",
      price: "$34.00/month",
      specs: {
        vcores: "2 vCores",
        ram: "4 GB RAM",
        storage: "80 GB SSD NVMe",
        bandwidth: "500 Mbps",
      },
      description:
        "Suitable for business websites, CRMs, or moderate eCommerce stores.",
      features:
        "Balanced specs for performance, flexibility, and affordability.",
      buttonText: "Order Essential Plan",
      popular: true,
    },
    {
      name: "VPS Comfort",
      price: "$54.00/month",
      specs: {
        vcores: "4 vCores",
        ram: "8 GB RAM",
        storage: "160 GB SSD NVMe",
        bandwidth: "1 Gbps",
      },
      description:
        "Designed for agencies, marketing firms, and growing tech startups.",
      features:
        "Supports high-traffic websites, CMS platforms, or multiple client accounts.",
      buttonText: "Order Comfort Plan",
    },
    {
      name: "VPS Elite",
      price: "$60.00/month",
      specs: {
        vcores: "8 vCores",
        ram: "32 GB RAM",
        storage: "640 GB SSD NVMe",
        bandwidth: "2 Gbps",
      },
      description:
        "Built for big data, streaming platforms, or enterprise-level hosting.",
      features:
        "Handles anything from private servers to multi-site platforms with heavy traffic.",
      buttonText: "Order Elite Plan",
    },
  ];

  const vpsFeatures = [
    {
      icon: <Server className="h-5 w-5" />,
      title: "Full OS Control",
      description:
        "Install your choice of Linux or Windows OS with full access to every layer of your system.",
    },
    {
      icon: <HardDrive className="h-5 w-5" />,
      title: "NVMe SSD Storage",
      description:
        "Experience lightning-fast file access, database queries, and page loads with ultra-reliable SSDs.",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Static IPv4 Included",
      description:
        "Get better email deliverability, SEO, and remote access with a dedicated IP address for every VPS.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Free DDoS Protection",
      description:
        "Keep your server safe from malicious attacks with built-in DDoS filtering and firewall options.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Optional Server Management",
      description:
        "Don't want to manage it yourself? Our cheap server management options are available at checkout.",
    },
  ];

  const useCases = [
    {
      title: "Web Developers & Freelancers",
      description:
        "Test websites, build staging environments, or host personal apps with freedom and root-level access.",
    },
    {
      title: "Small to Medium Businesses",
      description:
        "Run your CRM, email server, or online store locally — with fast access and minimal latency for Michigan customers.",
    },
    {
      title: "Students & Tech Enthusiasts",
      description:
        "Experiment with code, operating systems, and configurations on your own dedicated virtual server.",
    },
    {
      title: "Agencies & Resellers",
      description:
        "Host client sites on private environments, install multiple control panels, and deliver a professional experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="border-b border-secondary/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-primary" />
              <a
                href="https://arzhost.com/"
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              >
                ARZ Host
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="https://arzhost.com/vps/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                VPS Hosting
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-foreground hover:text-primary transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://arzhost.com/about-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="https://arzhost.com/contact-us/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Virtual Private Server Provider in{" "}
            <span className="text-primary">Michigan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-4xl mx-auto">
            Fast, Secure & Affordable VPS Hosting for Michigan-Based Projects
          </p>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            Are you searching for a{" "}
            <a
              href="https://arzhost.com/vps/"
              className="text-primary hover:underline"
            >
              virtual private server provider in Michigan
            </a>{" "}
            who delivers performance, affordability, and peace of mind? We've
            got you covered! From Detroit to Grand Rapids and everywhere in
            between, our high-speed VPS servers are perfect for local startups,
            growing businesses, developers, and agencies. Enjoy the power of
            local hosting without the local price tag.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://arzhost.com/vps/">Get Started with Michigan VPS</a>
          </Button>
        </div>
      </section>

      {/* Why Choose VPS Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose VPS Hosting in Michigan?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-secondary/20 hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="https://arzhost.com/vps/">Launch Your VPS Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              VPS Hosting Plans – Exact Pricing from{" "}
              <a
                href="https://arzhost.com/"
                className="text-primary hover:underline"
              >
                ARZ Host
              </a>
            </h2>
            <p className="text-lg text-muted-foreground">
              All VPS plans include full root access, instant setup, 24/7
              support, NVMe SSD, and 1 IPv4 address.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-card border-secondary/20 hover:border-primary/50 transition-all duration-300 ${plan.popular ? "ring-2 ring-primary" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Cpu className="h-4 w-4 text-primary" />
                      <span className="text-sm">{plan.specs.vcores}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4 text-primary" />
                      <span className="text-sm">{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HardDrive className="h-4 w-4 text-primary" />
                      <span className="text-sm">{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm">{plan.specs.bandwidth}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <p className="text-sm">{plan.features}</p>
                  <Button className="w-full" asChild>
                    <a href="https://arzhost.com/vps/">{plan.buttonText}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VPS Features Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            VPS Features Tailored for Michigan Hosting Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vpsFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex space-x-4 p-6 bg-card rounded-lg border border-secondary/20"
              >
                <div className="text-primary">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://arzhost.com/vps/">View All Features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who Needs a VPS in Michigan?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{useCase.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="https://arzhost.com/vps/">
                Pick the Perfect Plan for You
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Hosting Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Local Hosting with Global Reliability
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
            As a top virtual private server provider in Michigan, we offer the
            best of both worlds:
            <strong className="text-foreground">
              {" "}
              Local speed + Global-grade reliability
            </strong>
            . Whether you're in Detroit, Lansing, Ann Arbor, or Kalamazoo — our{" "}
            <a
              href="https://arzhost.com/"
              className="text-primary hover:underline"
            >
              VPS services
            </a>{" "}
            are built to perform and scale.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-secondary/20">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">99.9% Uptime Guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-secondary/20">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Premium NVMe SSD Storage</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-secondary/20">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">
                Scalable CPU, RAM, & Disk Upgrades
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-card rounded-lg border border-secondary/20">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">
                24/7 Live Chat & Ticket Support
              </span>
            </div>
          </div>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://arzhost.com/vps/">
              Start Hosting from Michigan Today
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Picking a Plan?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Whether you're just getting started or switching from another
            provider, we're here to guide you through the process.
          </p>
          <p className="text-xl mb-8 text-foreground">
            "Chat with our VPS experts today — or jump straight in and launch
            your server in just minutes!"
          </p>
          <div className="space-y-4">
            <p className="text-2xl font-bold text-primary mb-6">
              Reliable VPS Hosting. Local Advantage. Global Reach.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://arzhost.com/vps/">Order Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-secondary/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ARZ Host</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Professional VPS hosting provider serving Michigan and beyond
                with reliable, fast, and secure virtual private servers.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://arzhost.com/"
                    className="text-primary hover:underline"
                  >
                    arzhost.com
                  </a>
                </p>
                <p className="text-sm">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+16315948060"
                    className="text-primary hover:underline"
                  >
                    +1 (631) 594-8060
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://arzhost.com/vps/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Region-Based VPS
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://arzhost.com/about-us/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/contact-us/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://arzhost.com/terms-conditions/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/privacy-policy/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/disclaimer/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024{" "}
              <a
                href="https://arzhost.com/"
                className="text-primary hover:underline"
              >
                ARZ Host
              </a>
              . All rights reserved. Professional VPS hosting solutions for
              Michigan businesses and developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
