"use client"

import {
  BookOpen,
  Package,
  MapPin,
  Phone,
  Clock,
  Star,
  Award,
  Shield,
  DollarSign,
  Menu,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    "/images/gemini-generated-image-tj2c4stj2c4stj2c.jpeg",
    "/images/gemini-generated-image-tj2c4stj2c4stj2c-20-281-29.jpeg",
    "/images/489784637-1214240954043848-3267195434763359967-n.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-[#0a0a0f] border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img
                src="/khurshid-logo.png"
                alt="Khurshid Book Center Logo"
                className="h-14 w-auto object-contain brightness-110"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("products")}
                className="group text-sm font-medium text-white hover:text-red-500 transition-colors flex items-center gap-1"
              >
                What We Offer
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="group text-sm font-medium text-white hover:text-red-500 transition-colors flex items-center gap-1"
              >
                Our Products
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="group text-sm font-medium text-white hover:text-red-500 transition-colors flex items-center gap-1"
              >
                About Us
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group text-sm font-medium text-white hover:text-red-500 transition-colors flex items-center gap-1"
              >
                Contact
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                onClick={() => scrollToSection("products")}
                className="hidden md:flex bg-red-600 text-white hover:bg-red-700 font-semibold rounded-full px-6 py-2 shadow-lg shadow-red-600/30"
              >
                Visit Our Store
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="hidden md:flex border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full px-6 py-2 bg-transparent font-semibold transition-all"
              >
                Get in Touch
              </Button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white text-sm font-medium hidden md:flex items-center gap-1 hover:text-red-500 transition-colors"
              >
                Location
                <ChevronDown className="h-4 w-4" />
              </button>
              <Button size="sm" variant="ghost" className="lg:hidden text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Main hero content - Two column layout */}
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content column */}
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
              {/* Main headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Empowering
                  <br />
                  Students,
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-red-600">Inspiring Learning</span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                At Khurshid Book Center, we specialize in providing quality educational materials tailored to students' needs. With a legacy of excellence, a collection of over 5,000+ products, and a passion for education.
              </p>

              {/* Location info card */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 bg-white/5 backdrop-blur-md px-6 py-4 rounded-xl border border-white/10 w-fit mx-auto lg:mx-0">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm text-white/95 font-medium">
                  195-Saddar Bazar, Nowshera Cantt, Khyber Pakhtunkhwa
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("products")}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg px-8 py-3 shadow-xl hover:shadow-red-600/40 hover:scale-105 transition-all duration-300 text-base"
                >
                  Visit Our Store
                </Button>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-white/40 hover:border-red-500 text-white font-bold rounded-lg px-8 py-3 bg-white/5 hover:bg-red-600/10 transition-all duration-300 text-base"
                >
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-white/40 hover:border-red-500 text-white font-bold rounded-lg px-8 py-3 bg-white/5 hover:bg-red-600/10 transition-all duration-300 text-base"
                >
                  Location
                </Button>
              </div>

              {/* Trusted by section */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs text-white/60 mb-4 uppercase tracking-[0.2em] font-bold">Trusted By:</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="text-white/70 text-sm font-medium">Education Pakistan</div>
                  <div className="text-white/70 text-sm font-medium">Local Business Directory</div>
                  <div className="text-white/70 text-sm font-medium">Nowshera Times</div>
                  <div className="text-white/70 text-sm font-medium">KPK Journal</div>
                </div>
              </div>
            </div>

            {/* Right image carousel column */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[9/12]">
                {/* Image carousel */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-red-600/30">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Khurshid Book Center ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  ))}

                  {/* Carousel indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "w-8 bg-red-600"
                            : "w-2 bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Image counter */}
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                    {currentImageIndex + 1} / {heroImages.length}
                  </div>
                </div>

                {/* Decorative shadow/glow effect */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-red-600/20 to-transparent -z-10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>



      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/bookstore-shelves-with-colorful-books.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center animate-pulse shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Khurshid Book Center</h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Sadar Bazar, Nowshera Cantt, Khurshid Book Center has been a cornerstone of
              educational excellence in our community. We pride ourselves on offering a comprehensive selection of
              quality products and personalized service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-red-600/50 hover:-translate-y-2 relative overflow-hidden group bg-card/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600/30 to-red-700/20 flex items-center justify-center mx-auto mb-5 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Award className="h-10 w-10 text-red-700" />
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <h4 className="text-3xl font-serif font-bold mb-2 text-foreground">4.0★</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-medium">397+ verified reviews</p>
                <p className="text-xs text-red-700 font-semibold bg-red-600/10 px-3 py-1 rounded-full inline-block">
                  Trusted Since 1990
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#1e3a8a]/50 hover:-translate-y-2 relative overflow-hidden group bg-card/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e3a8a]/30 to-[#1e40af]/20 flex items-center justify-center mx-auto mb-5 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Package className="h-10 w-10 text-[#1e3a8a]" />
                </div>
                <h4 className="text-3xl font-serif font-bold mb-2 text-foreground">5000+</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-medium">Premium quality items</p>
                <p className="text-xs text-[#1e3a8a] font-semibold bg-[#1e3a8a]/10 px-3 py-1 rounded-full inline-block">
                  Wide Selection
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-green-500/50 hover:-translate-y-2 relative overflow-hidden group bg-card/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/20 flex items-center justify-center mx-auto mb-5 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <DollarSign className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-3xl font-serif font-bold mb-2 text-foreground">Best Price</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-medium">
                  Affordable & competitive rates
                </p>
                <p className="text-xs text-green-600 font-semibold bg-green-500/10 px-3 py-1 rounded-full inline-block">
                  Value for Money
                </p>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#1e3a8a]/50 hover:-translate-y-2 relative overflow-hidden group bg-card/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e3a8a]/30 to-[#1e40af]/20 flex items-center justify-center mx-auto mb-5 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Shield className="h-10 w-10 text-[#1e3a8a]" />
                </div>
                <h4 className="text-3xl font-serif font-bold mb-2 text-foreground">Quality</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2 font-medium">
                  100% authentic products
                </p>
                <p className="text-xs text-[#1e3a8a] font-semibold bg-[#1e3a8a]/10 px-3 py-1 rounded-full inline-block">
                  Verified & Original
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Comprehensive Product Range
            </h3>
            <p className="text-lg text-muted-foreground">
              Everything you need for academic success and creative learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-red-600/50 relative transform hover:-translate-y-3 hover:rotate-1">
              <div className="aspect-square bg-gradient-to-br from-red-600/10 to-red-700/5 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/books-collection-academic.jpg"
                  alt="Books Collection"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  1000+ Titles
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-background to-red-600/5">
                <h4 className="text-xl font-serif font-semibold mb-2">Books</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Textbooks, reference materials, fiction, non-fiction, and children's literature
                </p>
              </div>
            </Card>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#1e3a8a]/50 relative transform hover:-translate-y-3 hover:-rotate-1">
              <div className="aspect-square bg-gradient-to-br from-[#1e3a8a]/10 to-[#1e40af]/5 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/stationery-display-store.jpg"
                  alt="Stationery Collection"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-[#1e3a8a] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Premium Quality
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-background to-[#1e3a8a]/5">
                <h4 className="text-xl font-serif font-semibold mb-2">Stationery</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Notebooks, pens, pencils, art supplies, and office essentials
                </p>
              </div>
            </Card>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-green-500/50 relative transform hover:-translate-y-3 hover:rotate-1">
              <div className="aspect-square bg-gradient-to-br from-green-500/10 to-green-600/5 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/school-uniform-collection.jpg"
                  alt="School Uniforms"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  All Sizes
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-background to-green-500/5">
                <h4 className="text-xl font-serif font-semibold mb-2">School Uniforms</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Quality uniforms for all ages and educational institutions
                </p>
              </div>
            </Card>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#1e3a8a]/50 relative transform hover:-translate-y-3 hover:-rotate-1">
              <div className="aspect-square bg-gradient-to-br from-[#1e3a8a]/10 to-[#1e40af]/5 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/educational-toys-learning.jpg"
                  alt="Educational Toys"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-[#1e3a8a] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  Educational
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-background to-[#1e3a8a]/5">
                <h4 className="text-xl font-serif font-semibold mb-2">Toys & More</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Educational toys, games, and learning materials for children
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section id="featured" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Featured Books & Collections
            </h3>
            <p className="text-lg text-muted-foreground">
              Explore our curated selection of bestsellers and educational materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src="/academic-textbook-cover-mathematics.jpg"
                  alt="Academic Textbooks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-semibold mb-1 text-foreground">Academic Textbooks</h4>
                <p className="text-sm text-muted-foreground">All subjects & grades</p>
              </div>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src="/children-story-books-colorful.jpg"
                  alt="Children's Books"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-semibold mb-1 text-foreground">Children's Literature</h4>
                <p className="text-sm text-muted-foreground">Stories & learning</p>
              </div>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src="/islamic-books-quran-urdu.jpg"
                  alt="Islamic Books"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-semibold mb-1 text-foreground">Islamic Literature</h4>
                <p className="text-sm text-muted-foreground">Quran & religious texts</p>
              </div>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src="/reference-books-dictionary-encyclopedia.jpg"
                  alt="Reference Books"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif font-semibold mb-1 text-foreground">Reference Materials</h4>
                <p className="text-sm text-muted-foreground">Dictionaries & guides</p>
              </div>
            </Card>
          </div>

          {/* Gallery Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Our Gallery</h3>
                <p className="text-lg text-muted-foreground">A glimpse into our store and offerings</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src="/bookstore-shelves-with-colorful-books.jpg"
                      alt="Bookstore Shelves"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif font-semibold text-foreground">Extensive Collection</h4>
                    <p className="text-sm text-muted-foreground mt-1">Thousands of titles across all genres</p>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src="/stationery-supplies-pens-notebooks.jpg"
                      alt="Stationery Collection"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif font-semibold text-foreground">Complete Stationery</h4>
                    <p className="text-sm text-muted-foreground mt-1">All your writing and art supplies</p>
                  </div>
                </Card>

                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src="/school-uniforms-display.jpg"
                      alt="School Uniforms"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-serif font-semibold text-foreground">Quality Uniforms</h4>
                    <p className="text-sm text-muted-foreground mt-1">Durable and comfortable school wear</p>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What Our Customers Say</h3>
            <p className="text-lg text-muted-foreground">Trusted by hundreds in the Nowshera community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                "The best books shop in town. Great selection and helpful staff!"
              </p>
              <p className="text-xs font-medium text-muted-foreground">— Fahad Raza</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <Star className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                "Known for its quality and variety in books and stuff. Has stationery, plus kids toys and other items."
              </p>
              <p className="text-xs font-medium text-muted-foreground">— Dr. Ahsan Atharali</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <Star className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                "A trusted name in Nowshera for all educational needs. Quality products at fair prices."
              </p>
              <p className="text-xs font-medium text-muted-foreground">— Community Member</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Visit Us Today</h3>
              <p className="text-lg text-muted-foreground">
                We're here to serve you with quality products and excellent service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h4 className="text-xl font-serif font-semibold mb-6">Store Information</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        195 Saddar Bazar, Saddar Nowshera
                        <br />
                        Nowshera Cantt, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+92 321 9753008</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-sm text-muted-foreground">Opens 8 AM Sunday</p>
                      <p className="text-xs text-muted-foreground mt-1">Check for daily hours</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h4 className="text-xl font-serif font-semibold mb-6">New Location Coming Soon</h4>
                <div className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed">
                    We're expanding! Khursheed Books and Uniform is opening a new location near All in One Store,
                    Hakimabad, Nowshera, KPK.
                  </p>
                  <div className="p-4 bg-accent rounded-lg">
                    <p className="text-sm font-medium text-accent-foreground mb-2">Better Parking Available</p>
                    <p className="text-xs text-muted-foreground">
                      The new location will offer improved parking facilities for your convenience.
                    </p>
                  </div>
                  <Button className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call for More Details
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0f] text-white py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/khurshid-logo.png" alt="Khurshid Book Center" className="h-14 w-auto brightness-110" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Your trusted partner in education since 1990. Serving Nowshera and beyond with quality books,
                stationery, and educational supplies.
              </p>

              <div className="space-y-4">
                <div>
                  <h5 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                    Pakistan (Main Store)
                  </h5>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    195 Saddar Bazar, Saddar Nowshera
                    <br />
                    Nowshera Cantt, KPK
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold text-sm mb-2">New Location (Coming Soon)</h5>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Near All in One Store
                    <br />
                    Hakimabad, Nowshera, KPK
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button className="text-white font-semibold mb-6 flex items-center gap-2 group">
                Our Products
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Academic Books
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Textbooks & Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Stationery Supplies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    School Uniforms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Educational Toys
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Islamic Books & Quran
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <button className="text-white font-semibold mb-6 flex items-center gap-2 group">
                Services and Solutions
                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <ul className="space-y-3 text-sm text-gray-400 mb-6">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Bulk Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    School Supplies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Custom Uniforms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Book Ordering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Delivery Service
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 text-red-500 fill-red-500" />
                ))}
                <Star className="h-4 w-4 text-red-500" />
              </div>
              <p className="text-xs text-gray-500 mb-6">4.0 Rating · 397+ Google Reviews</p>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Khurshid Book Center. All rights reserved. · خورشید کتاب سینٹر
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-red-500 transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-12 rounded-l-xl rounded-r-none shadow-2xl shadow-red-600/50 writing-mode-vertical font-bold text-sm tracking-wider">
            Let's Talk Business
          </Button>
        </div>
      </footer>
    </div>
  )
}
