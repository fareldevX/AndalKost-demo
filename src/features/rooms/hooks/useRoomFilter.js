import { useState, useMemo } from 'react';
import { ROOM_TIERS } from '../data/rooms';

/**
 * Custom hook to filter room tiers by target audience and manage monthly/yearly billing cycle
 */
export function useRoomFilter(initialRooms = ROOM_TIERS) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [selectedAudience, setSelectedAudience] = useState('All'); // 'All' | 'Student' | 'Professional'

  const filteredRooms = useMemo(() => {
    if (selectedAudience === 'All') return initialRooms;
    return initialRooms.filter((room) => room.targetAudience === selectedAudience);
  }, [initialRooms, selectedAudience]);

  const toggleBilling = () => {
    setBillingCycle((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'));
  };

  return {
    billingCycle,
    setBillingCycle,
    toggleBilling,
    selectedAudience,
    setSelectedAudience,
    filteredRooms
  };
}
