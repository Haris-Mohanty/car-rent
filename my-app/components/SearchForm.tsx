import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Clock, MapPin, Car, Users } from "lucide-react";

const SearchForm = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto p-6 bg-white shadow-[var(--rental-shadow-lg)] border-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Pick Up Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Pick Up</span>
          </div>
          <Select>
            <SelectTrigger className="w-full">
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

        {/* Drop Off Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Drop Off</span>
          </div>
          <Select>
            <SelectTrigger className="w-full">
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

        {/* Date & Time Pickup */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <span>Date & Time</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input type="date" defaultValue="2024-04-20" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="12:00">12:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Date & Time Dropoff */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
            <CalendarDays className="w-4 h-4" />
            <span>Date & Time</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input type="date" defaultValue="2024-04-25" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="12:00">12:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Category */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
            <Car className="w-4 h-4" />
            <span>Category</span>
          </div>
          <Select>
            <SelectTrigger>
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

        {/* Minimum Age */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>Minimum Age</span>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="21-23" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="18-20">18-20</SelectItem>
              <SelectItem value="21-23">21-23</SelectItem>
              <SelectItem value="24-30">24-30</SelectItem>
              <SelectItem value="30+">30+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Area of Use */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Area of Use</span>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sydney Metro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sydney-metro">Sydney Metro</SelectItem>
              <SelectItem value="nsw-state">NSW State</SelectItem>
              <SelectItem value="interstate">Interstate</SelectItem>
              <SelectItem value="unlimited">Unlimited</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          size="lg" 
          className="px-8 py-3 bg-primary hover:bg-rental-primary-dark text-primary-foreground font-semibold"
        >
          Search Car
        </Button>
      </div>
    </Card>
  );
};

export default SearchForm;