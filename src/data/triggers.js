/**
 * Trigger data - service types that can activate AI Agent surveys
 * This data layer can be easily replaced with API calls
 */

export const TRIGGERS = [
  { id: 'generic', key: 'Generic' },
  { id: 'accessories', key: 'Accessories' },
  { id: 'after_sales', key: 'After sales' },
  { id: 'aftersale_mobile', key: 'Aftersale mobile' },
  { id: 'body_repair', key: 'Body Repair' },
  { id: 'online_purchase', key: 'Online purchase' },
  { id: 'purchase_new_vehicle', key: 'Purchase new vehicle' },
  { id: 'purchase_used_vehicle', key: 'Purchase used vehicle' },
  { id: 'short_term_rental', key: 'Short term rental' },
  { id: 'spare_parts', key: 'Spare parts' },
  { id: 'technical_control', key: 'Technical control' },
  { id: 'trade_in', key: 'Trade-in' },
  { id: 'long_term_rental', key: 'long term rental' },
];

/**
 * Fetch triggers - can be replaced with actual API call
 * @returns {Promise<Array>} List of available triggers
 */
export async function fetchTriggers() {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => resolve([...TRIGGERS]), 100);
  });
}

export default TRIGGERS;






