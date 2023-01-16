import React, { useState } from "react";

function PaymentForm() {
  const [activeTab, setActiveTab] = useState("currency");
  const [activeCurrencyTab, setActiveCurrencyTab] = useState("USD");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCurrencyTabClick = (tabId) => {
    setActiveCurrencyTab(tabId);
  };

  return (
    <div className="payment-form">
      <div className="payment-tabs">
        <div
          id="currency-tab"
          className={`payment-tab ${activeTab === "currency" && "active"}`}
          onClick={() => handleTabClick("currency")}
        >
          Карта
        </div>
        <div
          id="crypto-tab"
          className={`payment-tab ${activeTab === "crypto" && "active"}`}
          onClick={() => handleTabClick("crypto")}
        >
          Криптовалюта
        </div>
        <div
          id="paypal-tab"
          className={`payment-tab ${activeTab === "paypal" && "active"}`}
          onClick={() => handleTabClick("paypal")}
        >
          PayPal 
        </div>
      </div>
      <form>
        {activeTab === "currency" && (
          <div>
            <div className="currency-tabs">
              <div
                id="USD-tab"
                className={`currency-tab ${
                  activeCurrencyTab === "USD" && "active"
                }`}
                onClick={() => handleCurrencyTabClick("USD")}
              >
                USD
              </div>
              <div
                id="EUR-tab"
                className={`currency-tab ${
                  activeCurrencyTab === "EUR" && "active"
                }`}
                onClick={() => handleCurrencyTabClick("EUR")}
              >
                EUR
              </div>
              <div
                id="GBP-tab"
                className={`currency-tab ${
                  activeCurrencyTab === "UAH" && "active"
                }`}
                onClick={() => handleCurrencyTabClick("UAH")}
              >
                UAH
              </div>
            </div>
            <div className="card-form">
              <input type="text" id="card-number" name="card-number" placeholder="Номер Карты"/>
              <input type="text" id="expiry-date" name="expiry-date" placeholder="ММ/ГГ"/>
              <input type="text" id="cvv" name="cvv" placeholder="CVV"/>
            </div>
          </div>
        )}
        {activeTab === "crypto" && (
          <div style={{textAlign: 'center'}}>
            <div style={{marginBottom: '1rem'}}>
                <p>Bitcoin</p>
                <p>bc1qrf2uj202f60uver3r9uyf7kypwaan50mtfyehl</p>
            </div>
            <div style={{marginBottom: '1rem'}}>
                <p>Etherium</p>
                <p>bc1qrf2uj202f60uver3r9uyf7kypwaan50mtfyehl</p>
            </div>
            <div style={{marginBottom: '1rem'}}>
                <p>Tether</p>
                <p>bc1qrf2uj202f60uver3r9uyf7kypwaan50mtfyehl</p>
            </div>
          </div>
        )}
        {activeTab === "paypal" && (
          <div>
            PayPal link
          </div>
        )}
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <input type="submit" value="Помочь!" />
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
