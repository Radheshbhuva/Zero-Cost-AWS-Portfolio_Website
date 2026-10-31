/**
 * Gmail Compose URL Generation Utility
 * Generates secure, properly encoded Gmail compose URLs with form data
 */

export interface GmailComposeParams {
  recipient: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Generates a Gmail compose URL with pre-filled fields
 * Uses the Gmail compose UI for better user experience
 * 
 * @param params - The parameters to populate the Gmail compose window
 * @returns The Gmail compose URL
 * 
 * @example
 * const url = generateGmailComposeUrl({
 *   recipient: 'example@gmail.com',
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   subject: 'Portfolio Opportunity',
 *   message: 'I would like to discuss a role...'
 * });
 * window.open(url, '_blank', 'noopener,noreferrer');
 */
export function generateGmailComposeUrl(params: GmailComposeParams): string {
  // Construct the email body with sender information and message
  const emailBody = [
    `Name: ${params.name}`,
    `Email: ${params.email}`,
    '', // Empty line for spacing
    `Message:`,
    params.message
  ].join('\n');
  
  // Build the Gmail compose URL with properly encoded parameters
  // view=cm means "compose mode"
  // fs=1 means "full screen"
  // to= is the recipient
  // su= is the subject
  // body= is the email body
  const baseUrl = 'https://mail.google.com/mail/';
  const params_encoded = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: params.recipient,
    su: params.subject,
    body: emailBody
  });
  
  return `${baseUrl}?${params_encoded.toString()}`;
}

/**
 * Opens the Gmail compose window with pre-filled form data
 * Uses secure window.open with security flags
 * 
 * @param url - The Gmail compose URL
 * @returns true if window opened successfully, false otherwise
 */
export function openGmailCompose(url: string): boolean {
  try {
    // Open Gmail in a new tab with security flags
    // noopener: prevents the new page from accessing window.opener
    // noreferrer: prevents referrer leakage
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    
    // Check if window was successfully opened
    if (!newWindow) {
      console.warn('Failed to open Gmail compose window. Pop-ups may be blocked.');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error opening Gmail compose window:', error);
    return false;
  }
}

/**
 * Opens Gmail compose with form data and shows user feedback
 * Handles errors gracefully with console messages
 * 
 * @param params - The parameters to populate the Gmail compose window
 * @returns true if window opened successfully, false otherwise
 */
export function openGmailWithFormData(params: GmailComposeParams): boolean {
  const url = generateGmailComposeUrl(params);
  return openGmailCompose(url);
}

/**
 * Gets the Gmail compose URL for manual fallback
 * Used when pop-ups are blocked - user can copy and paste into browser
 * 
 * @param params - The parameters to populate the Gmail compose window
 * @returns The full Gmail compose URL
 */
export function getGmailFallbackUrl(params: GmailComposeParams): string {
  return generateGmailComposeUrl(params);
}
