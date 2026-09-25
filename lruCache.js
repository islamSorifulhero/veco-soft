/**
 * LRU (Least Recently Used) Cache Implementation using JavaScript Map
 * Time Complexity: O(1) average for both get() and put()
 * Space Complexity: O(capacity)
 */
class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be a positive integer.");
    }
    this.capacity = capacity;
    this.cache = new Map();
  }

  /**
   * Get value by key.
   * Returns stored value if key exists; otherwise -1.
   * Updates the key as most recently used.
   */
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    // Re-insert the key to update its order as most recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  /**
   * Insert or update a key/value pair.
   * Evicts the least recently used item if capacity is exceeded.
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // The first key in Map iterator is the least recently used key
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
      console.log(`[Evicted] Least Recently Used Key: "${lruKey}"`);
    }
    this.cache.set(key, value);
  }
}

// ====================================================
// Example Usage / Demonstration (Matching Assessment Spec)
// ====================================================
console.log("--- LRU Cache Test Execution ---");

const cache = new LRUCache(2);

console.log('cache.put("A", 10)');
cache.put("A", 10);

console.log('cache.put("B", 20)');
cache.put("B", 20);

console.log(`cache.get("A") -> Output: ${cache.get("A")}`); // Expected: 10

console.log('cache.put("C", 30) -- Exceeds capacity (2)');
cache.put("C", 30); // "B" should be evicted

console.log(`cache.get("B") -> Output: ${cache.get("B")}`); // Expected: -1

console.log(`cache.get("C") -> Output: ${cache.get("C")}`); // Expected: 30

console.log(`cache.get("A") -> Output: ${cache.get("A")}`); // Expected: 10

console.log("--------------------------------");