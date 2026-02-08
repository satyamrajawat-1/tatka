"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline-scene"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <section className="relative w-full max-w-5xl flex items-center justify-center overflow-hidden bg-black">
        <div className="container mx-auto">
          <Card className="w-full min-h-[600px] bg-black/[0.96] relative overflow-hidden border-none shadow-2xl">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left content - Robot Model */}
              <div className="flex-1 relative min-h-[400px] lg:min-h-full">
                <SplineScene
                  scene="https://prod.spline.design/UbM7F-HZcyTbZ4y3/scene.splinecode"
                  className="w-full h-full"
                />
              </div>

              {/* Right content - Info & Form */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center bg-black/40 backdrop-blur-md">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text">
                      AI Ticket Master
                    </h1>
                    <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
                      Your personal automated train ticket booking assistant. 
                      I handle the complex searches and instant bookings so you don't have to.
                    </p>
                  </div>

                  <form className="space-y-4 mt-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="from" className="text-neutral-300">Departure Station</Label>
                      <Input 
                        id="from" 
                        placeholder="e.g. London King's Cross" 
                        className="bg-neutral-900 border-neutral-800 text-white focus:ring-blue-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="to" className="text-neutral-300">Destination Station</Label>
                      <Input 
                        id="to" 
                        placeholder="e.g. Edinburgh Waverley" 
                        className="bg-neutral-900 border-neutral-800 text-white focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-neutral-300">Travel Date</Label>
                      <Input 
                        id="date" 
                        type="date"
                        className="bg-neutral-900 border-neutral-800 text-white focus:ring-blue-500"
                      />
                    </div>

                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4 font-semibold">
                      Start Automated Booking
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>

                  <p className="text-xs text-neutral-500 text-center">
                    Powered by advanced AI automation. 24/7 monitoring for the best fares.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
