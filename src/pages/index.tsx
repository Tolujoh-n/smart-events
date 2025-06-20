"use client";

import { useEffect, useState } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getConfig } from "@/lib/wagmi";
import CheckoutButton from "@/components/CheckoutButton";
import { Sparkles, Zap, Star, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import Image from "next/image";
import type { StaticImageData } from "next/image";

const queryClient = new QueryClient();
const config = getConfig();

type Campaign = {
  id: string;
  name: string;
  description: string;
  target: string;
  amount: number;
  image: StaticImageData;
};

import aaa from "../assets/caaa.webp";
import bbb from "../assets/cbbb.webp";
import ccc from "../assets/cddd.jpg";
import ddd from "../assets/cccc.webp";
import eee from "../assets/ceee.webp";
import fff from "../assets/cfff.jpg";
import ggg from "../assets/cggg.webp";
import hhh from "../assets/chhh.webp";

const dummyEvents: Campaign[] = [
  {
    id: "1",
    name: "REAL Change for Climate and Nature",
    description:
      "Things CAN get better. Will you help us call for the REAL change we need for climate, nature.",
    amount: 2,
    target: "60",
    image: aaa,
  },
  {
    id: "2",
    name: "Just a little something",
    description:
      "I'm raising money to help give my daughter a treat after a stressful time going up against the FA",
    amount: 2,
    target: "500",
    image: bbb,
  },
  {
    id: "3",
    name: "Y Bont needs your help",
    description:
      "Y Bont is the only specialist Day Nursery facility for children under 5yrs with Disabilities.",
    amount: 2,
    target: "40",
    image: ccc,
  },
  {
    id: "4",
    name: "Audrey support fund",
    description:
      "We’re raising money to support Audrey during and after imprisonment",
    amount: 2,
    target: "70",
    image: ddd,
  },
  {
    id: "5",
    name: "The Rape Gang Inquiry",
    description:
      "What happened, how did it happen, why was it allowed to happen?",
    amount: 2,
    target: "35",
    image: eee,
  },
  {
    id: "6",
    name: "Keep on Growing",
    description:
      "Our aim is to grow food and community in planet positive ways. We desperately need an injection etc",
    amount: 2,
    target: "20",
    image: fff,
  },
  {
    id: "7",
    name: "The White Mannie Memorial Repairs",
    description:
      "The beloved Mannie Statue, a symbol of our coastal community’s resilience, now needs urgent",
    amount: 2,
    target: "100",
    image: ggg,
  },
  {
    id: "8",
    name: "Wishaw Cameras",
    description: "Raise £1,250 to fund 6 cameras and accessories for Wishaw.",
    amount: 2,
    target: "120",
    image: hhh,
  },
];

const Index = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );
  const [isFundOpen, setIsFundOpen] = useState(false);
  const [form, setForm] = useState({ amount: "" });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-900 text-white">
          <nav className="flex justify-between items-center p-5 border-b border-gray-700">
            <div className="text-xl font-bold">
              <a href="/">SmartEvent</a>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-white">Profile</p>
            </div>
          </nav>

          <main className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">View Events</h1>

              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => toast.info("Feature coming soon!")}
              >
                Create Events
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dummyEvents.map((m) => (
                <div
                  key={m.id}
                  className="bg-gray-800 rounded p-2 cursor-pointer hover:scale-105 transition"
                >
                  <Image
                    src={m.image}
                    alt={m.name}
                    className="rounded w-full h-48 object-cover"
                  />
                  <h3 className="mt-2 text-l md:text-l font-bold">{m.name}</h3>
                  <p className="text-sm md:text-base text-gray-300">
                    {m.description}
                  </p>
                  <div className="flex gap-2 mt-4 items-center">
                    <p className="text-sm">
                      <b>Open slots.:</b> {m.target}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCampaign(m);
                        setIsFundOpen(true);
                      }}
                      className="flex-1 bg-blue-600 py-2 rounded text-sm font-semibold"
                    >
                      Buy Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {isFundOpen && selectedCampaign && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
                <div className="bg-gray-900 text-white p-6 border border-gray-300 rounded w-full ml-2 mr-2 max-w-md max-h-screen overflow-y-auto relative">
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
                    onClick={() => setIsFundOpen(false)}
                    aria-label="Close"
                  >
                    &times;
                  </button>
                  <div className="w-full h-60 border border-dashed border-gray-500 flex items-center overflow-auto justify-center rounded mb-4 relative">
                    <Image
                      src={selectedCampaign?.image || aaa}
                      alt="Generated Meme"
                      className="w-full h-full object-cover rounded"
                      width={500}
                      height={300}
                    />
                  </div>
                  <div className="space-y-6 flex flex-col md:flex-row md:space-y-0 md:space-x-6 overflow-auto">
                    <div>
                      <h2 className="text-xl font-bold mb-4">
                        {selectedCampaign?.name}
                      </h2>

                      <p>{selectedCampaign?.description}</p>
                      <br />

                      <p className="text-sm">
                        <b>Amount:</b> {selectedCampaign?.amount}
                      </p>
                      <br />
                      <div className="text-left">
                        <button
                          className="bg-yellow-600 text-white px-3 py-1 rounded"
                          onClick={() => setIsFundOpen(false)}
                          aria-label="Close"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                    {/* One-Click Purchase Section */}
                    <div className="space-y-6">
                      <div
                        style={{
                          border: "1px solid gray",
                          padding: "10px",
                          borderRadius: "8px",
                        }}
                      >
                        <h3>ONE-CLICK EVENT TICKET PURCHASE</h3>
                        <p>
                          Buy instantly with your smart wallet - no connection
                          required!
                        </p>
                      </div>

                      <CheckoutButton amount={selectedCampaign?.amount || 0} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
          <Toaster position="top-center" />

          <footer className="text-center text-gray-500 mt-8 mb-8">
            BUILT ON BASE
            <br></br>
            <br></br>
          </footer>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Index;
