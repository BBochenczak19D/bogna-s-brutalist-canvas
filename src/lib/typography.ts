/**
 * Polish typographic orphan prevention utility.
 * 
 * Prevents short Polish conjunctions and prepositions from being left
 * alone at the end of a line by replacing the space after them with
 * a non-breaking space (U+00A0), binding them to the following word.
 */

// Single-letter words that should never be left alone at end of line
const SINGLE_LETTER = ['a', 'i', 'o', 'u', 'w', 'z'];

// Two-letter words that commonly become orphans
const TWO_LETTER = ['by', 'co', 'do', 'ku', 'na', 'ni', 'no', 'od', 'po', 'to', 'we', 'za', 'ze', 'że'];

// Build regex: match word boundary + orphan word + space (case insensitive)
const ALL_ORPHANS = [...SINGLE_LETTER, ...TWO_LETTER];
const ORPHAN_REGEX = new RegExp(
  `(\\s|^)(${ALL_ORPHANS.join('|')})\\s`,
  'gi'
);

/**
 * Replaces regular spaces after short Polish conjunctions/prepositions
 * with non-breaking spaces to prevent typographic orphans.
 * 
 * @example
 * noOrphans("Sztuka i nauka") // "Sztuka i\u00A0nauka"
 */
export function noOrphans(text: string): string {
  // Replace space AFTER the conjunction with non-breaking space
  return text.replace(ORPHAN_REGEX, (_, before, word) => `${before}${word}\u00A0`);
}
