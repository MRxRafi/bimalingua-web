import { TestResult } from './test-data';

export interface HubSpotPayload {
  email?: string;
  properties: {
    english_level: string;
    test_score: number;
    test_date: string;
    source: string;
  };
}

export async function sendToHubSpot(data: TestResult): Promise<{ success: boolean; mockResponse: boolean }> {
  // Mock implementation - simulates API call to HubSpot
  // When real HubSpot is available, replace with actual API call

  const payload: HubSpotPayload = {
    email: data.email,
    properties: {
      english_level: data.level,
      test_score: data.score,
      test_date: data.timestamp,
      source: data.source
    }
  };

  // Log the mock request
  console.log('=== MOCK HUBSPOT API CALL ===');
  console.log('Endpoint: POST https://api.hubapi.com/crm/v3/objects/contacts');
  console.log('Payload:', JSON.stringify(payload, null, 2));
  console.log('==============================');

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return { success: true, mockResponse: true };
}

export function getHubSpotConfig() {
  return {
    isMock: true,
    apiKeyRequired: true, // Will need real API key when going live
    portalIdRequired: true // Will need real portal ID when going live
  };
}