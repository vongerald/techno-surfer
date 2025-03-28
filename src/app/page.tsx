import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Globe, Mail, MessageSquare, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MarketingBanner } from "./components/marketing-banner"
import { EbookPromo } from "./components/ebook-promo"
import { LeadCaptureForm } from "./components/lead-capture-form"
import { SiteHeader } from "./components/site-header"
import { SiteFooter } from "./components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingBanner />
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section with TechnoSurfers Image */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Technosurfers%20graphic%20ad1-zPrOmvdURHJPTqY5877ybdTLCtsoE8.png"
                alt="TechnoSurfers Digital Marketing"
                width={800}
                height={1200}
                className="rounded-lg shadow-xl mb-8"
                priority
              />

              <div className="mt-8 text-center" id="free-marketing">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Online Presence?
                </h2>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                  We're offering our complete digital marketing services FREE for 3 months to the first 5 businesses
                  that qualify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture and Ebook Promo Section */}
        <section className="w-full py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <LeadCaptureForm />
              <div className="flex flex-col justify-center">
                <EbookPromo />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Digital Marketing Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive solutions to help your business thrive in the digital landscape
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-md bg-primary/10 p-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>SEO Optimization</CardTitle>
                  <CardDescription>Improve your search engine rankings and drive organic traffic</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Our SEO experts will optimize your website to rank higher in search results, bringing more qualified
                    traffic to your business.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/services/seo">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-md bg-primary/10 p-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>PPC Advertising</CardTitle>
                  <CardDescription>Drive targeted traffic and increase conversions</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Our PPC campaigns are designed to maximize ROI, targeting the right audience at the right time to
                    drive conversions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/services/ppc">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-md bg-primary/10 p-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Social Media Marketing</CardTitle>
                  <CardDescription>Build brand awareness and engage with your audience</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We create and manage social media campaigns that connect with your audience and build brand loyalty.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/services/social-media">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-md bg-primary/10 p-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Marketing</CardTitle>
                  <CardDescription>Nurture leads and drive repeat business</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Our email marketing strategies help you stay connected with your audience and drive conversions
                    through personalized campaigns.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/services/email-marketing">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-md bg-primary/10 p-2">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Content Marketing</CardTitle>
                  <CardDescription>Engage your audience with valuable content</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    We create high-quality content that resonates with your audience and establishes your brand as an
                    industry authority.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/services/content-marketing">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-2 w-fit rounded-md bg-primary/10 p-2">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Analytics & Reporting</CardTitle>
                  <CardDescription>Track performance and optimize campaigns</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Our detailed analytics and reporting help you understand what's working and where to improve for
                    better results.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/services/analytics">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about our digital marketing
                  services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 bg-background shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Client"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <CardTitle className="text-base">Sarah Johnson</CardTitle>
                      <CardDescription>CEO, TechStart</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "The SEO optimization services provided by TechnoSurfer have transformed our online presence. Our
                    organic traffic has increased by 150% in just three months!"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Client"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <CardTitle className="text-base">Michael Chen</CardTitle>
                      <CardDescription>Marketing Director, GrowthBrand</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "Their PPC campaigns delivered an ROI of 300%. The team is responsive, strategic, and truly
                    understands our business goals. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Client"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <CardTitle className="text-base">Emily Rodriguez</CardTitle>
                      <CardDescription>Owner, StyleBoutique</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "The social media strategy developed by TechnoSurfer has helped us connect with our audience in
                    meaningful ways. Our engagement rates have never been higher!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Grow Your Business?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with our digital marketing services today and see the difference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link href="#free-marketing">Get a Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

