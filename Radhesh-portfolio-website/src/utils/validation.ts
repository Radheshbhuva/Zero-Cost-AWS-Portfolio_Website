/**
 * Contact Form Validation Utilities
 * Provides type-safe validation for form fields with descriptive error messages
 */

export interface FormFieldError {
  field: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Validates a name field
 * @param name - The name to validate
 * @returns Error message or null if valid
 */
export function validateName(name: string): string | null {
  const trimmed = name.trim();
  
  if (!trimmed) {
    return 'Name is required';
  }
  
  if (trimmed.length < 2) {
    return 'Name must be at least 2 characters';
  }
  
  return null;
}

/**
 * Validates an email address using RFC 5322 simplified pattern
 * @param email - The email to validate
 * @returns Error message or null if valid
 */
export function validateEmail(email: string): string | null {
  const trimmed = email.trim();
  
  if (!trimmed) {
    return 'Email is required';
  }
  
  // RFC 5322 simplified email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(trimmed)) {
    return 'Please enter a valid email address';
  }
  
  return null;
}

/**
 * Validates a subject field
 * @param subject - The subject to validate
 * @returns Error message or null if valid
 */
export function validateSubject(subject: string): string | null {
  const trimmed = subject.trim();
  
  if (!trimmed) {
    return 'Subject is required';
  }
  
  if (trimmed.length < 3) {
    return 'Subject must be at least 3 characters';
  }
  
  return null;
}

/**
 * Validates a message field
 * @param message - The message to validate
 * @returns Error message or null if valid
 */
export function validateMessage(message: string): string | null {
  const trimmed = message.trim();
  
  if (!trimmed) {
    return 'Message is required';
  }
  
  if (trimmed.length < 10) {
    return 'Message must be at least 10 characters';
  }
  
  return null;
}

/**
 * Validates all contact form fields
 * @param data - The form data to validate
 * @returns Array of field errors, empty if valid
 */
export function validateContactForm(data: ContactFormData): FormFieldError[] {
  const errors: FormFieldError[] = [];
  
  const nameError = validateName(data.name);
  if (nameError) {
    errors.push({ field: 'name', message: nameError });
  }
  
  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.push({ field: 'email', message: emailError });
  }
  
  const subjectError = validateSubject(data.subject);
  if (subjectError) {
    errors.push({ field: 'subject', message: subjectError });
  }
  
  const messageError = validateMessage(data.message);
  if (messageError) {
    errors.push({ field: 'message', message: messageError });
  }
  
  return errors;
}

/**
 * Checks if form is valid
 * @param data - The form data to validate
 * @returns True if all fields are valid
 */
export function isContactFormValid(data: ContactFormData): boolean {
  return validateContactForm(data).length === 0;
}
