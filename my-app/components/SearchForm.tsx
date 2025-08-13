// src/components/SearchForm.tsx
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, MapPin, Car } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const SearchForm = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");

  return (
    <Card className="w-full max-w-6xl mx-auto p-8 bg-white shadow-xl border border-gray-200 rounded-2xl">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Find Your Perfect Ride</h2>

      {/* First Line: Pick Up, Drop Off, Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Pick Up */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Pick Up</span>
          </label>
          <Select>
            <SelectTrigger className="w-full rounded-lg border-gray-300">
              <SelectValue placeholder="Pick Up Address" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sydney-airport">Sydney Airport</SelectItem>
              <SelectItem value="sydney-cbd">Sydney CBD</SelectItem>
              <SelectItem value="bondi-beach">Bondi Beach</SelectItem>
              <SelectItem value="circular-quay">Circular Quay</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Drop Off */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Drop Off</span>
          </label>
          <Select>
            <SelectTrigger className="w-full rounded-lg border-gray-300">
              <SelectValue placeholder="Drop Off Address" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sydney-airport">Sydney Airport</SelectItem>
              <SelectItem value="sydney-cbd">Sydney CBD</SelectItem>
              <SelectItem value="bondi-beach">Bondi Beach</SelectItem>
              <SelectItem value="circular-quay">Circular Quay</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date & Time */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-600">
            <CalendarDays className="w-4 h-4" />
            <span>Date & Time</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {/* Date Picker */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-lg border border-gray-300",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  fromDate={new Date()}
                />
              </PopoverContent>
            </Popover>

            {/* Time Input */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-lg border border-gray-300",
                    !time && "text-muted-foreground"
                  )}
                >
                  {time ? time : <span>Pick a time</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="p-2 w-auto">
                <Input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="rounded-lg border border-gray-300"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Second Line: Category & Button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Category */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-600">
            <Car className="w-4 h-4" />
            <span>Category</span>
          </label>
          <Select>
            <SelectTrigger className="w-full rounded-lg border-gray-300">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="compact">Compact</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button
            size="lg"
            className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg text-base shadow-md cursor-pointer"
          >
            Search Car
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SearchForm;
