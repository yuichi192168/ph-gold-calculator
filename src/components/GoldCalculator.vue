<template>
  <div class="gold-calculator">
    <h3>Philippines Gold Price Calculator</h3>
    
    <form @submit.prevent="calculate">
      <div class="karat-section">
        <label>Select Karat:</label>
        <div class="karat-options">
          <button 
            type="button"
            v-for="k in karats" 
            :key="k.value"
            :class="{ active: karat === k.value }"
            :style="getKaratStyle(k.value)"
            @click="selectKarat(k.value)"
          >
            {{ k.value }}K
          </button>
        </div>
      </div>
      
      <div>
        <label for="goldRate">Gold Rate (PHP per gram of 24K):</label>
        <input 
          type="number" 
          id="goldRate" 
          v-model.number="goldRate" 
          step="0.01" 
          min="0" 
          required
          placeholder="Enter 24K gold rate in PHP"
        >
      </div>
      
      <div>
        <label for="grams">Weight (grams):</label>
        <input 
          type="number" 
          id="grams" 
          v-model.number="grams" 
          step="0.001" 
          min="0" 
          required
          placeholder="Enter gold weight in grams"
        >
      </div>
      
      <div>
        <label for="makingCharge">Making Charge (PHP):</label>
        <input 
          type="number" 
          id="makingCharge" 
          v-model.number="makingCharge" 
          step="0.01" 
          min="0" 
          required
          placeholder="Enter making charge in PHP"
        >
      </div>
      
      <div class="buttons">
        <button type="submit">Calculate</button>
        <button type="button" @click="reset">Reset</button>
      </div>
    </form>

    <div v-if="result" class="result">
      <h4>Gold Price Breakdown</h4>
      <table>
        <tbody>
          <tr>
            <td>Selected Karat:</td>
            <td>{{ karat }}K ({{ purity }}% Pure)</td>
          </tr>
          <tr>
            <td>Gold Rate ({{ karat }}K):</td>
            <td>PHP {{ formatNumber(karatRate) }} / gram</td>
          </tr>
          <tr>
            <td>Gold Value:</td>
            <td>PHP {{ formatNumber(goldValue) }}</td>
          </tr>
          <tr>
            <td>Making Charge:</td>
            <td>PHP {{ formatNumber(makingCharge) }}</td>
          </tr>
          <tr>
            <td>Subtotal:</td>
            <td>PHP {{ formatNumber(subtotal) }}</td>
          </tr>
          <tr>
            <td>12% Tax:</td>
            <td>PHP {{ formatNumber(tax) }}</td>
          </tr>
          <tr class="total">
            <td><strong>Final Gold Price:</strong></td>
            <td><strong>PHP {{ formatNumber(finalPrice) }}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoldCalculator',
  data() {
    return {
      karat: 24,
      karats: [
        { value: 24, purity: 99.99 },
        { value: 23, purity: 95.8 },
        { value: 22, purity: 91.6 },
        { value: 18, purity: 75.0 },
        { value: 14, purity: 58.3 },
        { value: 10, purity: 41.7 }
      ],
      goldRate: null,
      grams: null,
      makingCharge: null,
      result: false
    }
  },
  computed: {
    purity() {
      const k = this.karats.find(k => k.value === this.karat)
      return k ? k.purity : 100
    },
    karatRate() {
      return this.goldRate * (this.purity / 100)
    },
    goldValue() {
      return this.karatRate * this.grams
    },
    subtotal() {
      return this.goldValue + this.makingCharge
    },
    tax() {
      return this.subtotal * 0.12
    },
    finalPrice() {
      return this.subtotal + this.tax
    }
  },
  methods: {
    selectKarat(value) {
      this.karat = value
      this.updateBackground()
    },
    updateBackground() {
      const hue = 40 + (24 - this.karat) * 8
      document.documentElement.style.setProperty('--primary-gold', '#DDCA7D')
      document.documentElement.style.setProperty('--secondary-gold', '#B88B4A')
      document.documentElement.style.setProperty('--dynamic-hue', hue)
    },
    calculate() {
      this.result = true
      this.updateBackground()
    },
    reset() {
      this.karat = 24
      this.goldRate = null
      this.grams = null
      this.makingCharge = null
      this.result = false
      this.updateBackground()
    },
    getKaratStyle(value) {
      const hue = 40 + (24 - value) * 8
      const bgColor = `hsla(${hue}, 55%, 50%, 0.5)`
      return {
        backgroundColor: bgColor
      }
    },
    formatNumber(num) {
      if (num === null || num === undefined) return '0.00'
      return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  mounted() {
    this.updateBackground()
  }
}
</script>

<style scoped>
.gold-calculator {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

h3 {
  color: #A27035;
  margin-bottom: 25px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  font-size: 24px;
}

h4 {
  color: #A27035;
  margin-top: 25px;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  font-size: 20px;
}

.karat-section {
  margin-bottom: 20px;
  text-align: left;
}

.karat-section label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #A27035;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.karat-options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.karat-options button {
  padding: 10px 16px;
  background: rgba(184, 139, 74, 0.3);
  color: #A27035;
  border: 2px solid #B88B4A;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.karat-options button:hover {
  background: rgba(184, 139, 74, 0.5);
}

.karat-options button.active {
  background: #B88B4A;
  color: #fff;
  border-color: #DDCA7D;
  box-shadow: 0 0 15px rgba(221, 202, 125, 0.5);
}

form div:not(.karat-section):not(.buttons) {
  margin-bottom: 18px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #A27035;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

input {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #B88B4A;
  border-radius: 10px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
}

input:focus {
  border-color: #DDCA7D;
  outline: none;
  box-shadow: 0 0 15px rgba(221, 202, 125, 0.4);
}

input::placeholder {
  color: rgba(162, 112, 53, 0.5);
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.buttons button {
  flex: 1;
  padding: 14px;
  background: #B88B4A;
  color: white;
  border: 2px solid #DDCA7D;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.buttons button:hover {
  background: #DDCA7D;
  color: #A27035;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(221, 202, 125, 0.4);
}

.buttons button[type="button"] {
  background: rgba(184, 139, 74, 0.5);
  color: #A27035;
}

.buttons button[type="button"]:hover {
  background: #B88B4A;
  color: white;
}

.result {
  margin-top: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 2px solid rgba(184, 139, 74, 0.5);
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 12px 8px;
  border-bottom: 1px solid rgba(184, 139, 74, 0.3);
  text-align: left;
  color: #A27035;
  font-weight: 500;
}

td:last-child {
  text-align: right;
  font-weight: bold;
}

tr.total {
  background: linear-gradient(135deg, #B88B4A, #A27035);
  border-radius: 10px;
}

tr.total td {
  border-bottom: none;
  padding: 18px 8px;
  font-size: 20px;
  color: white;
  border: 2px solid #DDCA7D;
}
</style>
