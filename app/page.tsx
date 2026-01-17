import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Heart, Stethoscope, ShieldCheck, Clock, Phone, Mail, MapPin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">MediCore</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Services
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Departments
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Our Doctors
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Patient Portal
            </Button>
            <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white">
              Book Appointment
            </Button>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Your health, our priority
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Experience world-class healthcare with compassionate doctors, advanced technology, and personalized
              treatment plans tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                Book an Appointment
              </Button>
              <Button size="lg" variant="outline">
                View Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-8 flex items-center justify-center">
              <img
                src="/medical-clinic-hero-doctors-team.jpg"
                alt="Medical Team"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 text-balance">Comprehensive healthcare under one roof</h2>
            <p className="text-xl text-sky-50 leading-relaxed">
              From preventive care to specialized treatments, we provide complete medical services for you and your
              family
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img src="/modern-hospital-reception-waiting-area.jpg" alt="Modern Hospital Facility" className="w-full" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Physicians</h3>
              <p className="text-foreground/70 leading-relaxed">
                Board-certified doctors with years of experience across 20+ medical specialties
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-foreground/70 leading-relaxed">
                State-of-the-art diagnostic equipment and cutting-edge treatment facilities
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Care</h3>
              <p className="text-foreground/70 leading-relaxed">
                Round-the-clock emergency services with rapid response medical teams
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Specialized medical departments</h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our hospital houses specialized departments staffed by experts dedicated to providing the highest
                quality care in their respective fields.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Cardiology and Heart Surgery Center</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Orthopedics and Sports Medicine</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Women and Children's Health</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Neurology and Neurosurgery</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src="/doctor-consultation-patient-office.jpg" alt="Doctor Consultation" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">Patient-centered care services</h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We put patients first with services designed for your comfort and convenience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Online Appointments</h3>
                <p className="text-slate-300">Book, reschedule, or cancel appointments from anywhere, anytime</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Telemedicine Consultations</h3>
                <p className="text-slate-300">Connect with doctors virtually for follow-ups and minor consultations</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Digital Health Records</h3>
                <p className="text-slate-300">Access your complete medical history and test results online</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Insurance Assistance</h3>
                <p className="text-slate-300">Dedicated team to help with claims and insurance paperwork</p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-slate-800 rounded-2xl overflow-hidden">
            <img src="/hospital-patient-room-modern-interior.jpg" alt="Modern Patient Room" className="w-full" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl p-8">
              <img
                src="/medical-appointment-scheduling-interface.jpg"
                alt="Appointment Scheduling"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <Badge className="mb-4 bg-sky-100 text-sky-700 hover:bg-sky-100">Easy Scheduling</Badge>
            <h2 className="text-4xl font-bold mb-6 text-balance">Book appointments in minutes</h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Our streamlined booking system makes it easy to find available slots with your preferred doctor and
              specialty.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-sky-600" />
                <span>Choose from 200+ specialists</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-sky-600" />
                <span>Same-day appointments available</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-sky-600" />
                <span>Automated reminders via SMS and email</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Why families trust MediCore</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                For over 25 years, we've been committed to delivering exceptional healthcare with compassion and
                integrity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Accredited Excellence</h3>
                    <p className="text-foreground/70">JCI accredited with multiple quality certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Care Plans</h3>
                    <p className="text-foreground/70">Treatment tailored to your unique health needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                    <p className="text-foreground/70">Clear cost estimates before any procedure</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src="/medical-team-meeting-discussion.jpg" alt="Medical Team" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-900 to-sky-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by thousands of patients</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-sky-200">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-sky-200">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-sky-200">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-sky-200">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-50 to-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-balance">Complete healthcare solutions</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Comprehensive medical services for every stage of life
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Primary Care</h3>
                <p className="text-foreground/70 mb-4">
                  Routine check-ups, preventive screenings, vaccinations, and management of chronic conditions by family
                  physicians.
                </p>
                <Button variant="link" className="text-sky-600 p-0">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Specialty Care</h3>
                <p className="text-foreground/70 mb-4">
                  Expert care from specialists in cardiology, oncology, neurology, orthopedics, and more.
                </p>
                <Button variant="link" className="text-sky-600 p-0">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 text-balance">Ready to prioritize your health?</h2>
          <p className="text-xl text-sky-50 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert physicians and take the first step towards better health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-sky-600 bg-transparent">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg">MediCore</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">Your trusted partner in health and wellness</p>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>1-800-MEDICORE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>care@medicore.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>123 Health Avenue, Medical City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Primary Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Specialty Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Emergency Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Telemedicine
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Departments</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Orthopedics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pediatrics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Neurology
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Patient Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Patient Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Insurance Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Health Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2026 MediCore Health Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
