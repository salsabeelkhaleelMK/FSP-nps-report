/**
 * Survey data - available surveys that can be linked to triggers
 * This data layer can be easily replaced with API calls
 */

export const SURVEYS = [
  {
    id: 'nps_general',
    nameKey: 'survey_nps_general',
    type: 'NPS',
    description: 'General customer satisfaction survey',
  },
  {
    id: 'nps_purchase',
    nameKey: 'survey_nps_purchase',
    type: 'NPS',
    description: 'Post-purchase satisfaction survey',
  },
  {
    id: 'nps_service',
    nameKey: 'survey_nps_service',
    type: 'NPS',
    description: 'Service quality satisfaction survey',
  },
  {
    id: 'csat_delivery',
    nameKey: 'survey_csat_delivery',
    type: 'CSAT',
    description: 'Delivery experience satisfaction',
  },
  {
    id: 'csat_support',
    nameKey: 'survey_csat_support',
    type: 'CSAT',
    description: 'Customer support satisfaction',
  },
  {
    id: 'ces_process',
    nameKey: 'survey_ces_process',
    type: 'CES',
    description: 'Process ease evaluation',
  },
  {
    id: 'fidcar_certified',
    nameKey: 'survey_fidcar_certified',
    type: 'Fidcar',
    description: 'Fidcar Certified quality survey',
  },
  {
    id: 'post_repair',
    nameKey: 'survey_post_repair',
    type: 'Quality',
    description: 'Post-repair quality check',
  },
  {
    id: 'rental_experience',
    nameKey: 'survey_rental_experience',
    type: 'Experience',
    description: 'Rental service experience survey',
  },
  {
    id: 'trade_in_feedback',
    nameKey: 'survey_trade_in_feedback',
    type: 'Feedback',
    description: 'Trade-in process feedback',
  },
];

/**
 * Survey type definitions for filtering
 */
export const SURVEY_TYPES = [
  { id: 'NPS', label: 'Net Promoter Score' },
  { id: 'CSAT', label: 'Customer Satisfaction' },
  { id: 'CES', label: 'Customer Effort Score' },
  { id: 'Fidcar', label: 'Fidcar Certified' },
  { id: 'Quality', label: 'Quality Check' },
  { id: 'Experience', label: 'Experience Survey' },
  { id: 'Feedback', label: 'General Feedback' },
];

/**
 * Fetch surveys - can be replaced with actual API call
 * @returns {Promise<Array>} List of available surveys
 */
export async function fetchSurveys() {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => resolve([...SURVEYS]), 100);
  });
}

export default SURVEYS;






