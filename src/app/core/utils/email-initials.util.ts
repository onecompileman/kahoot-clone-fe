export function getEmailInitials(email: string | null | undefined): string {
  if (!email) {
    return '';
  }

  const localPart = email.split('@')[0]?.trim();

  if (!localPart) {
    return '';
  }

  const nameParts = localPart
    .split(/[._-]+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (nameParts.length >= 2) {
    return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
  }

  const compactName = localPart.replace(/[^a-zA-Z0-9]/g, '');

  return compactName.slice(0, 2).toUpperCase();
}