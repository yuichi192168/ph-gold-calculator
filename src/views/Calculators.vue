<template>
  <div class="calculators">
    <div class="calculator-card">
      <img src="/gold-bar.png" alt="Gold Bar" class="card-icon" />
      <h2>Gold Price Calculator</h2>
      <p>Calculate gold prices in the Philippines</p>
      
      <form @submit.prevent="calculateGoldPrice" class="calculator-form">
        <div class="form-group">
          <label>24K Gold Rate (PHP per gram)</label>
          <input 
            type="number" 
            v-model.number="goldRate" 
            step="0.01" 
            min="0"
            placeholder="Enter current 24K rate"
            required
          />
        </div>

        <div class="form-group">
          <label>Select Karat</label>
          <div class="karat-buttons">
            <button 
              v-for="karat in karats" 
              :key="karat.value"
              type="button"
              :class="{ active: selectedKarat === karat.value }"
              :style="{ 
                borderColor: selectedKarat === karat.value ? '#DDCA7D' : 'rgba(255,255,255,0.3)',
                background: selectedKarat === karat.value ? 'rgba(221, 202, 125, 0.4)' : 'rgba(255,255,255,0.15)'
              }"
              @click="selectedKarat = karat.value; updateHue(karat.hue)"
            >
              {{ karat.label }}
            </button>
          </div>
        </div>

        <div class="form-group">
          <label>Weight (grams)</label>
          <input 
            type="number" 
            v-model.number="grams" 
            step="0.001" 
            min="0"
            placeholder="Enter weight in grams"
            required
          />
        </div>

        <div class="form-group">
          <label>Making Charge (PHP)</label>
          <input 
            type="number" 
            v-model.number="makingCharge" 
            step="0.01" 
            min="0"
            placeholder="Enter making charge"
            required
          />
        </div>

        <button type="submit" class="calculate-btn">Calculate Price</button>
      </form>

      <div v-if="result" class="result-section">
        <div class="result-row">
          <span>Gold Value:</span>
          <span>₱{{ formatNumber(goldValue) }}</span>
        </div>
        <div class="result-row">
          <span>Purity ({{ selectedKaratLabel }}):</span>
          <span>{{ (getPurity(selectedKarat) * 100).toFixed(1) }}%</span>
        </div>
        <div class="result-row">
          <span>Making Charge:</span>
          <span>₱{{ formatNumber(makingCharge) }}</span>
        </div>
        <div class="result-row tax">
          <span>Tax (12%):</span>
          <span>₱{{ formatNumber(tax) }}</span>
        </div>
        <div class="result-row total">
          <span>Final Price:</span>
          <span>₱{{ formatNumber(finalPrice) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatorsPage',
  data() {
    return {
      goldRate: 0,
      selectedKarat: '24K',
      grams: 0,
      makingCharge: 0,
      result: false,
      karats: [
        { label: '10K', value: '10K', purity: 0.4167, hue: 35 },
        { label: '14K', value: '14K', purity: 0.5833, hue: 38 },
        { label: '18K', value: '18K', purity: 0.75, hue: 42 },
        { label: '22K', value: '22K', purity: 0.9167, hue: 45 },
        { label: '23K', value: '23K', purity: 0.9583, hue: 47 },
        { label: '24K', value: '24K', purity: 1, hue: 50 }
      ]
    }
  },
  computed: {
    selectedKaratLabel() {
      return this.selectedKarat
    },
    goldValue() {
      const purity = this.getPurity(this.selectedKarat)
      return this.goldRate * purity * this.grams
    },
    tax() {
      return this.goldValue * 0.12
    },
    finalPrice() {
      return this.goldValue + this.makingCharge + this.tax
    }
  },
  methods: {
    getPurity(karat) {
      const k = this.karats.find(k => k.value === karat)
      return k ? k.purity : 1
    },
    updateHue(hue) {
      document.documentElement.style.setProperty('--dynamic-hue', hue)
    },
    calculateGoldPrice() {
      this.result = true
    },
    formatNumber(num) {
      return num.toLocaleString('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  },
  beforeMount() {
    document.documentElement.style.setProperty('--dynamic-hue', 50)
  }
}
</script>

<style scoped>
.calculators {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 150px);
  padding: 20px;
}

.calculator-card {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.card-icon {
  width: 80px;
  height: 48px;
  display: block;
  margin: 0 auto 20px;
  filter: drop-shadow(0 0 10px rgba(221, 202, 125, 0.7));
}

h2 {
  color: #A27035;
  text-align: center;
  margin-bottom: 8px;
  font-size: 1.8em;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.15);
}

.calculator-card > p {
  color: #A27035;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  opacity: 0.9;
}

.form-group {
  margin-bottom: 22px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  color: #A27035;
  font-weight: 600;
  font-size: 0.95em;
}

.form-group input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  color: #A27035;
  font-size: 1em;
  font-weight: 500;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #DDCA7D;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 12px rgba(221, 202, 125, 0.3);
}

.form-group input::placeholder {
  color: rgba(162, 112, 53, 0.5);
}

.karat-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.karat-buttons button {
  flex: 1;
  min-width: 70px;
  padding: 12px 8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  color: #A27035;
  font-weight: 600;
  font-size: 0.95em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.karat-buttons button:hover {
  background: rgba(221, 202, 125, 0.3);
  transform: translateY(-2px);
}

.calculate-btn {
  width: 100%;
  padding: 16px;
  background: #B88B4A;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #DDCA7D;
}

.calculate-btn:hover {
  background: #DDCA7D;
  color: #A27035;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(221, 202, 125, 0.4);
}

.result-section {
  margin-top: 35px;
  padding: 25px;
  background: rgba(221, 202, 125, 0.2);
  border-radius: 16px;
  border: 2px solid rgba(221, 202, 125, 0.4);
}

.result-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(162, 112, 53, 0.2);
  color: #A27035;
  font-weight: 500;
}

.result-row:last-child {
  border-bottom: none;
}

.result-row.tax {
  color: #8B6914;
  font-weight: 600;
}

.result-row.total {
  margin-top: 8px;
  padding-top: 18px;
  border-top: 2px solid rgba(162, 112, 53, 0.4);
  border-bottom: none;
  font-size: 1.25em;
  font-weight: 700;
  color: #A27035;
}

.result-row.total span:last-child {
  color: #5D3A1A;
  text-shadow: 0 0 4px rgba(221, 202, 125, 0.3);
}
</style>
