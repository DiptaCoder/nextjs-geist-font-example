"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Orbitron, monospace' }}>
                SurvivalCraft
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact Us</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
                Unleash your survival instincts in a futuristic apocalypse
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Dive into a world where every decision matters. Build your base, forge alliances, and fight for survival in the ultimate post-apocalyptic experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x700?text=Futuristic+soldier+with+tactical+helmet+and+advanced+combat+gear+in+apocalyptic+setting" 
                alt="Futuristic soldier with tactical helmet and advanced combat gear"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Advanced Tactical Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Deploy cutting-edge technology and strategic warfare systems to dominate the battlefield and secure your survival.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-blue-600 text-2xl font-bold">×</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Immersive Combat Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Engage in intense battles with realistic physics and dynamic environments that respond to your every move.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-blue-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Strategic Base Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Construct and fortify your stronghold with advanced defensive systems and resource management capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              Harness the Power Of Innovation
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              In A Game Of Survival
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Experience cutting-edge technology and revolutionary gameplay mechanics that redefine what survival gaming can be.
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-center mb-8">
              <img 
                src="https://placehold.co/400x500?text=Elite+tactical+soldier+with+advanced+armor+and+futuristic+weapons+system" 
                alt="Elite tactical soldier with advanced armor and futuristic weapons"
                className="w-80 h-96 object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Feature Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge className="bg-blue-100 text-blue-800 w-fit">ADVANCED AI</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Intelligent NPCs with adaptive behavior patterns that evolve based on your gameplay style.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge className="bg-blue-100 text-blue-800 w-fit">REAL-TIME COLLABORATION</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Team up with players worldwide in seamless multiplayer experiences with voice integration.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge className="bg-blue-100 text-blue-800 w-fit">DYNAMIC WORLD</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Living environments that change and adapt, creating unique challenges every time you play.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge className="bg-blue-100 text-blue-800 w-fit">CUTTING-EDGE GRAPHICS</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Photorealistic visuals powered by next-generation rendering technology and ray tracing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Character Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              From Outcasts To Legends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Choose from a diverse roster of survivors, each with unique abilities and backstories that shape your journey through the apocalypse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://placehold.co/300x300?text=NOXIUS+cyberpunk+warrior+with+glowing+red+visor+and+tactical+gear" 
                  alt="Noxius - Cyberpunk warrior with glowing red visor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  NOXIUS
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://placehold.co/300x300?text=VALKYRIE+female+soldier+with+advanced+combat+armor+and+energy+weapons" 
                  alt="Valkyrie - Female soldier with advanced combat armor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  VALKYRIE
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 md:col-span-2 lg:col-span-1">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://placehold.co/300x300?text=AETHER+mysterious+figure+with+ethereal+blue+energy+and+futuristic+suit" 
                  alt="Aether - Mysterious figure with ethereal blue energy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  AETHER
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://placehold.co/300x300?text=KANE+rugged+survivor+with+mechanical+arm+and+battle+scars" 
                  alt="Kane - Rugged survivor with mechanical arm and battle scars"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  KANE
                </CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src="https://placehold.co/300x300?text=VEGAN+stealth+operative+with+dark+hood+and+advanced+reconnaissance+gear" 
                  alt="Vegan - Stealth operative with dark hood and reconnaissance gear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                  VEGAN
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              Invest In Your Survival
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-600" style={{ fontFamily: 'Orbitron, monospace' }}>
              Pricing Tiers
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Choose the perfect plan to enhance your survival experience with premium features and exclusive content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-gray-200 hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Basic Plan
                </CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                  $29.99<span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Perfect for casual survivors
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Access to all basic game modes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Standard character customization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Community forum access
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Regular content updates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Email support
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-8">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-xl transition-shadow bg-white ring-2 ring-blue-600">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-sm"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Pro Plan
                </CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                  $49.99<span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  For serious survivors
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    All Basic Plan features included
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Premium character skins & weapons
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Exclusive game modes & maps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Priority matchmaking
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    24/7 priority support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Early access to new content
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-8">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
              Unveiling Clarity:
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-600" style={{ fontFamily: 'Orbitron, monospace' }}>
              Your Questions Answered
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Get instant answers to the most frequently asked questions about SurvivalCraft and start your journey with confidence.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                What platforms is SurvivalCraft available on?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                SurvivalCraft is available on PC, PlayStation 5, Xbox Series X/S, and will be coming to mobile platforms in 2024.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Can I play with friends in multiplayer mode?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Yes! SurvivalCraft supports up to 32 players in multiplayer mode with cross-platform compatibility and voice chat integration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Are there regular content updates and new features?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                We release major content updates every 3 months, including new maps, characters, weapons, and game modes. Pro subscribers get early access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                What are the minimum system requirements?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Minimum: Intel i5-8400 or AMD Ryzen 5 2600, 16GB RAM, GTX 1060 or RX 580, 50GB storage. Recommended specs available on our system requirements page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Is there a single-player campaign mode?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Absolutely! Experience a 20+ hour single-player campaign with branching storylines, plus endless survival modes for solo play.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              Still have a question?
            </h4>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
                SurvivalCraft
              </h3>
              <p className="text-blue-200" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                The ultimate survival experience in a post-apocalyptic world. Build, fight, and survive.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
                  <span className="text-sm">i</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                Game
              </h4>
              <ul className="space-y-2 text-blue-200" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <li><a href="#" className="hover:text-white">Download</a></li>
                <li><a href="#" className="hover:text-white">System Requirements</a></li>
                <li><a href="#" className="hover:text-white">Game Modes</a></li>
                <li><a href="#" className="hover:text-white">Characters</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                Community
              </h4>
              <ul className="space-y-2 text-blue-200" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <li><a href="#" className="hover:text-white">Forums</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Tournaments</a></li>
                <li><a href="#" className="hover:text-white">Leaderboards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                Support
              </h4>
              <ul className="space-y-2 text-blue-200" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Bug Reports</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                © 2024 SurvivalCraft. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-blue-200 hover:text-white text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Privacy Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-white text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Terms of Service
                </a>
                <a href="#" className="text-blue-200 hover:text-white text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
