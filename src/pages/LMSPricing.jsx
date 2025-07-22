import React, { useState, useEffect } from 'react';

const LMSPricing = () => {
  // Constants
  const EXCHANGE_RATE = 4179; // COP per USD
  const IVA_RATE = 0.19; // Colombia IVA 19%

  // State
  const [activeTab, setActiveTab] = useState('basic');
  const [language, setLanguage] = useState('es');
  const [currency, setCurrency] = useState('USD');
  const [showResult, setShowResult] = useState(false);

  // Form state
  const [users, setUsers] = useState('');
  const [customization, setCustomization] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [integrations, setIntegrations] = useState({});

  // Errors
  const [errors, setErrors] = useState({});

  // Quote results
  const [quoteData, setQuoteData] = useState({
    totalCost: 0,
    subtotal: 0,
    ivaAmount: 0,
    initialPayment: 0,
    periodicAmount: 0,
    breakdown: [],
    features: []
  });

  // Translations
  const translations = {
    en: {
      title: "LMS Moodle SaaS Quote Calculator",
      description: "Configure your online learning platform and get a personalized quote.",
      basic: "Basic Configuration",
      integrations: "Integrations",
      payment: "Payment Method",
      users: "Estimated number of users:",
      usersHelp: "Select the user range for your platform.",
      usersError: "Please select a user range.",
      support: "Support included:",
      supportLabel: "Basic technical support included",
      customization: "Customization level:",
      customizationError: "Please select a customization level.",
      paymentMethod: "Payment method:",
      paymentError: "Please select a payment method.",
      generateQuote: "Generate Quote",
      reset: "Reset",
      quoteTitle: "Your Personalized Quote",
      breakdown: "Cost Breakdown",
      features: "Included Features",
      downloadPDF: "Download PDF",
      saveQuote: "Save Quote",
      periodicPayment: "Periodic Payment",
      totalAnnualCost: "Total Annual Cost",
      initialPaymentRequired: "Required Initial Payment"
    },
    es: {
      title: "Cotizador LMS Moodle SaaS",
      description: "Configure su plataforma de aprendizaje en línea y obtenga una cotización personalizada.",
      basic: "Configuración Básica",
      integrations: "Integraciones",
      payment: "Método de Pago",
      users: "Número estimado de usuarios:",
      usersHelp: "Seleccione el rango de usuarios para su plataforma.",
      usersError: "Por favor seleccione un rango de usuarios.",
      support: "Soporte incluido:",
      supportLabel: "Soporte técnico básico incluido",
      customization: "Nivel de personalización:",
      customizationError: "Por favor seleccione un nivel de personalización.",
      paymentMethod: "Método de pago:",
      paymentError: "Por favor seleccione un método de pago.",
      generateQuote: "Generar Cotización",
      reset: "Reiniciar",
      quoteTitle: "Su Cotización Personalizada",
      breakdown: "Desglose de Costos",
      features: "Características Incluidas",
      downloadPDF: "Descargar PDF",
      saveQuote: "Guardar Cotización",
      periodicPayment: "Pago Periódico",
      totalAnnualCost: "Costo Total Anual",
      initialPaymentRequired: "Pago inicial requerido"
    }
  };

  // Integration options
  const integrationOptions = [
    { id: 'zoom', name: 'Zoom', cost: 900, category: 'videoconferencing', tooltip: '10 hosts, $90/host/year' },
    { id: 'bbb', name: 'BigBlueButton', cost: 1200, category: 'videoconferencing', tooltip: '100 users' },
    // { id: 'teams', name: 'Microsoft Teams', cost: 0, category: 'videoconferencing', tooltip: 'Free for education' },
    // { id: 'h5p', name: 'H5P', cost: 0, category: 'interactiveContent', tooltip: 'Free open-source' },
    { id: 'nearpod', name: 'Nearpod', cost: 10000, category: 'interactiveContent', tooltip: '100 teachers' },
    { id: 'kahoot', name: 'Kahoot', cost: 5000, category: 'interactiveContent', tooltip: '100 teachers' },
    { id: 'turnitin', name: 'Turnitin', cost: 10000, category: 'assessments', tooltip: '1,000 students' },
    { id: 'seb', name: 'Safe Exam Browser', cost: 0, category: 'assessments', tooltip: 'Free' },
    { id: 'proctorio', name: 'Proctorio', cost: 5000, category: 'assessments', tooltip: '1,000 exams' },
    { id: 'intelliboard', name: 'IntelliBoard', cost: 2000, category: 'analytics' },
    { id: 'zoola', name: 'Zoola Analytics', cost: 3000, category: 'analytics' },
    { id: 'google-drive', name: 'Google Drive', cost: 0, category: 'fileManagement', tooltip: 'Free for education' },
    { id: 'dropbox', name: 'Dropbox', cost: 1200, category: 'fileManagement', tooltip: '100 users' },
    { id: 'onedrive', name: 'OneDrive', cost: 0, category: 'fileManagement', tooltip: 'Free for education' },
    { id: 'chatgpt', name: 'ChatGPT', cost: 2400, recurring: 200, category: 'aiTools', tooltip: '100 teachers' },
    { id: 'grammarly', name: 'Grammarly', cost: 1500, category: 'aiTools', tooltip: '100 users' },
    { id: 'pse', name: 'PSE (Colombia)', cost: 500, category: 'authPayments', tooltip: 'Integration cost' },
    { id: 'stripe', name: 'Stripe', cost: 0, category: 'authPayments', tooltip: 'Transaction fees apply' },
    { id: 'paypal', name: 'PayPal', cost: 0, category: 'authPayments', tooltip: 'Transaction fees apply' }
  ];

  // Format currency
  const formatCurrency = (amount, curr = currency) => {
    if (curr === 'COP') {
      const copAmount = amount * EXCHANGE_RATE;
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(copAmount);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Calculate quote
  const calculateQuote = () => {
    const userCount = parseInt(users);
    let baseCost, recurringCost;

    // Base costs based on user count
    if (userCount <= 100) {
      baseCost = 1775;
      recurringCost = 906;
    } else if (userCount <= 1000) {
      baseCost = 2375;
      recurringCost = 2406;
    } else {
      baseCost = 3375;
      recurringCost = 5406;
    }

    // Add customization cost
    const customizationCost = customization === 'basic' ? 0 : customization === 'moderate' ? 500 : 1500;
    baseCost += customizationCost;

    // Add integration costs
    let integrationCosts = 0;
    let recurringIntegrationCosts = 0;
    const selectedIntegrations = [];

    Object.keys(integrations).forEach(integrationId => {
      if (integrations[integrationId]) {
        const integration = integrationOptions.find(opt => opt.id === integrationId);
        if (integration) {
          integrationCosts += integration.cost;
          if (integration.recurring) {
            recurringIntegrationCosts += integration.recurring;
          }
          selectedIntegrations.push(integration);
        }
      }
    });

    baseCost += integrationCosts;
    recurringCost += recurringIntegrationCosts * 12;

    // Calculate totals
    const firstYearCost = baseCost + recurringCost;
    const margin = firstYearCost * 0.3;
    let subtotal = firstYearCost + margin;

    // Apply annual discount before IVA
    if (paymentMethod === 'annual') {
      subtotal *= 0.9;
    }

    // Calculate IVA (19% for Colombia)
    const ivaAmount = subtotal * IVA_RATE;
    const totalCost = subtotal + ivaAmount;
    const initialPayment = baseCost * 0.3;
    const periodicAmount = totalCost / (paymentMethod === 'monthly' ? 12 : 1);

    // Build breakdown
    const breakdown = [
      { label: language === 'es' ? 'Costo inicial (configuración):' : 'Initial cost (setup):', amount: baseCost - integrationCosts },
      { label: language === 'es' ? 'Integraciones adicionales:' : 'Additional integrations:', amount: integrationCosts },
      { label: language === 'es' ? 'Costo inicial total:' : 'Total initial cost:', amount: baseCost },
      { label: language === 'es' ? 'Costo recurrente anual:' : 'Annual recurring cost:', amount: recurringCost },
      { label: language === 'es' ? 'Margen (30%):' : 'Margin (30%):', amount: margin }
    ];

    if (paymentMethod === 'annual') {
      breakdown.push({
        label: language === 'es' ? 'Descuento por pago anual (10%):' : 'Annual payment discount (10%):',
        amount: -(firstYearCost + margin) * 0.1
      });
    }

    breakdown.push(
      { label: language === 'es' ? 'Subtotal (antes de IVA):' : 'Subtotal (before IVA):', amount: subtotal, highlight: true },
      { label: language === 'es' ? 'IVA (19%):' : 'IVA (19%):', amount: ivaAmount },
      { label: language === 'es' ? 'Total anual (con IVA):' : 'Annual total (with IVA):', amount: totalCost, highlight: true, color: 'text-green-600' },
      { label: language === 'es' ? 'Pago inicial requerido (30%):' : 'Required initial payment (30%):', amount: initialPayment, highlight: true, color: 'text-orange-600' }
    );

    // Build features list
    const features = [
      { name: language === 'es' ? 'Plataforma Moodle SaaS' : 'Moodle SaaS Platform', cost: 'included' },
      { name: language === 'es' ? 'Inscripción de usuarios (manual/CSV)' : 'User enrollment (manual/CSV)', cost: 'included' },
      { name: language === 'es' ? 'Soporte técnico básico' : 'Basic technical support', cost: 'included' },
      {
        name: `${language === 'es' ? 'Personalización:' : 'Customization:'} ${customization === 'basic' ? (language === 'es' ? 'Básica' : 'Basic') : customization === 'moderate' ? (language === 'es' ? 'Moderada' : 'Moderate') : (language === 'es' ? 'Avanzada' : 'Advanced')}`,
        cost: customizationCost === 0 ? 'included' : `+${formatCurrency(customizationCost)}`
      },
      ...selectedIntegrations.map(integration => ({
        name: integration.name,
        cost: integration.cost === 0 ? 'included' : `+${formatCurrency(integration.cost)}${integration.recurring ? `/año +${formatCurrency(integration.recurring)}/mes` : ''}`
      }))
    ];

    setQuoteData({
      totalCost,
      subtotal,
      ivaAmount,
      initialPayment,
      periodicAmount,
      breakdown,
      features
    });

    setShowResult(true);
  };

  // Validate and calculate quote
  const validateAndCalculateQuote = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!users) newErrors.users = translations[language].usersError;
    if (!customization) newErrors.customization = translations[language].customizationError;
    if (!paymentMethod) newErrors.paymentMethod = translations[language].paymentError;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      calculateQuote();
    }
  };

  // Reset form
  const resetForm = () => {
    setUsers('');
    setCustomization('');
    setPaymentMethod('');
    setIntegrations({});
    setErrors({});
    setShowResult(false);
    setActiveTab('basic');
  };

  // Handle integration change
  const handleIntegrationChange = (integrationId, checked) => {
    setIntegrations(prev => ({
      ...prev,
      [integrationId]: checked
    }));
  };

  // Tooltip component
  const Tooltip = ({ children, text }) => (
    <div className="tooltip-wrapper">
      {children}
      <div className="tooltip-content">
        {text}
        <div className="tooltip-arrow"></div>
      </div>
    </div>
  );

  return (











    <section id="lms" className=" " style={{ padding: '0px' }}>


      <div className="page-title dark-background aos-init aos-animate" data-aos="fade">
        <div className="container position-relative">
          <h1>{translations[language].title}</h1>
          {/* <p>Experiencias inmersivas con personajes tridimensionales</p> */}
          <nav className="breadcrumbs">
            {/* <ol>
              <li><a href="index.html">Home</a></li>
              <li className="current">Avatars 3D<</li>
            </ol> */}

            <ol>
              <li>

              </li>
            </ol>
          </nav>
        </div>
      </div>



      <div className="container">



        <div className="row">




          <div className="lms-pricing-container">
            <div className="container">
              <div className="main-heading mb-8 mt-8">
              </div>
              <div className="pricing-card p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div className="d-flex align-items-center">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="form-select me-3"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="form-select"
                    >
                      <option value="USD">USD</option>
                      <option value="COP">COP</option>
                    </select>
                  </div>
                </div>

                <p className="description-text mb-4">
                  {translations[language].description}
                </p>

                {/* Tabs */}
                {/* <div className="nav-tabs-wrapper">
                  <ul className="nav nav-tabs">
                    {['basic', 'integrations', 'payment'].map(tab => (
                      <li key={tab} className="nav-item">
                        <button
                          onClick={() => setActiveTab(tab)}
                          className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                        >
                          {translations[language][tab]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div> */}


                <div className="nav nav-tabs nav nav-tabs" role="tablist">
                  {['basic', 'integrations', 'payment'].map(tab => (
                    <div key={tab} className="nav-item">
                      <a
                        role="tab"
                        data-rr-ui-event-key={tab}
                        id={`${tab}Tab`}
                        aria-controls={`${tab}Panel`}
                        aria-selected={activeTab === tab}
                        className={`nav-link nav-link ${activeTab === tab ? 'active' : ''}`}
                        tabIndex={activeTab === tab ? 0 : -1}
                        onClick={() => setActiveTab(tab)}
                        href="#"
                      >
                        <i className={`bi bi-${tab === 'basic' ? 'gear' :
                            tab === 'integrations' ? 'plug' :
                              'credit-card'
                          }`} />
                        {translations[language][tab]}
                      </a>
                    </div>
                  ))}
                </div>

                <form onSubmit={validateAndCalculateQuote}>
                  {/* Basic Configuration Tab */}
                  {activeTab === 'basic' && (
                    <div className="tab-content-section">
                      <div className="form-group mb-4">
                        <label className="form-label">
                          {translations[language].users}
                        </label>
                        <select
                          value={users}
                          onChange={(e) => setUsers(e.target.value)}
                          className="form-select"
                          required
                        >
                          <option value="">Seleccione...</option>
                          <option value="100">Hasta 100 usuarios (Pequeño)</option>
                          <option value="500">101-1,000 usuarios (Mediano)</option>
                          <option value="1000">Más de 1,000 usuarios (Grande)</option>
                        </select>
                        <div className="form-text">
                          {translations[language].usersHelp}
                        </div>
                        {errors.users && (
                          <div className="invalid-feedback d-block">{errors.users}</div>
                        )}
                      </div>

                      <div className="form-group mb-4">
                        <label className="form-label">
                          {translations[language].support}
                        </label>
                        <div className="form-check">
                          <input type="checkbox" checked disabled className="form-check-input" />
                          <label className="form-check-label d-flex align-items-center">
                            {translations[language].supportLabel}
                            <span className="ms-2 text-success fw-semibold">($162-$681 USD/mes)</span>
                          </label>
                        </div>
                      </div>

                      <div className="form-group mb-4">
                        <label className="form-label">
                          {translations[language].customization}
                        </label>
                        <select
                          value={customization}
                          onChange={(e) => setCustomization(e.target.value)}
                          className="form-select"
                          required
                        >
                          <option value="">Seleccione...</option>
                          <option value="basic">Básica (logo y colores) (+$0)</option>
                          <option value="moderate">Moderada (tema personalizado) (+$500)</option>
                          <option value="advanced">Avanzada (desarrollo a medida) (+$1,500)</option>
                        </select>
                        {errors.customization && (
                          <div className="invalid-feedback d-block">{errors.customization}</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Integrations Tab */}
                  {activeTab === 'integrations' && (
                    <div className="tab-content-section">
                      {[
                        { category: 'videoconferencing', title: '📹 Videoconferencias', titleEn: '📹 Videoconferencing' },
                        { category: 'interactiveContent', title: '🧩 Contenido Interactivo', titleEn: '🧩 Interactive Content' },
                        { category: 'assessments', title: '📝 Evaluaciones', titleEn: '📝 Assessments' },
                        { category: 'analytics', title: '📊 Reportes y Analítica', titleEn: '📊 Reports and Analytics' },
                        { category: 'fileManagement', title: '📂 Gestión de Archivos', titleEn: '📂 File Management' },
                        { category: 'aiTools', title: '🤖 Herramientas de IA', titleEn: '🤖 AI Tools' },
                        { category: 'authPayments', title: '🔐 Autenticación y Pagos', titleEn: '🔐 Authentication and Payments' }
                      ].map(section => (
                        <div key={section.category} className="integration-section mb-4">
                          <h3 className="section-title">
                            {language === 'es' ? section.title : section.titleEn}
                          </h3>
                          <div className="integration-options">
                            {integrationOptions
                              .filter(option => option.category === section.category)
                              .map(option => (
                                <div key={option.id} className="d-flex align-items-center justify-content-between mb-2">
                                  <div className="form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      checked={integrations[option.id] || false}
                                      onChange={(e) => handleIntegrationChange(option.id, e.target.checked)}
                                    />
                                    <label className="form-check-label d-flex">
                                      {option.name}
                                      <span className="ms-2 text-primary fw-semibold">
                                        +{formatCurrency(option.cost)}
                                        {option.recurring && ` (+${formatCurrency(option.recurring)}/mes)`}
                                        {option.cost === 0 && option.id === 'stripe' && ' (2.9% + $0.30/tx)'}
                                        {option.cost === 0 && option.id === 'paypal' && ' (2.9% + $0.30/tx)'}
                                      </span>
                                      {option.tooltip && (
                                        <Tooltip text={option.tooltip}>
                                          <span className="ms-2 text-info cursor-help">ℹ️</span>
                                        </Tooltip>
                                      )}
                                    </label>
                                  </div>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Payment Tab */}
                  {activeTab === 'payment' && (
                    <div className="tab-content-section">
                      <div className="form-group mb-4">
                        <label className="form-label">
                          {translations[language].paymentMethod}
                        </label>
                        <select
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="form-select"
                          required
                        >
                          <option value="">Seleccione...</option>
                          <option value="monthly">Mensual</option>
                          <option value="annual">Anual (10% de descuento)</option>
                        </select>
                        {errors.paymentMethod && (
                          <div className="invalid-feedback d-block">{errors.paymentMethod}</div>
                        )}
                      </div>

                      <div className="form-group mb-4">
                        <label className="form-label">
                          Pago inicial:
                        </label>
                        <div className="form-check">
                          <input type="checkbox" checked disabled className="form-check-input" />
                          <label className="form-check-label">30% del costo inicial (obligatorio)</label>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="d-flex gap-3 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2"
                    >
                      {translations[language].generateQuote}
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-secondary px-4 py-2"
                    >
                      {translations[language].reset}
                    </button>
                  </div>
                </form>

                {/* Results */}
                {showResult && (
                  <div className="quote-results mt-4 p-4">
                    <h2 className="section-title mb-4">
                      {translations[language].quoteTitle}
                    </h2>

                    {/* Pricing Display */}
                    <div className="pricing-display-card p-4 mb-4">
                      <div className="row">
                        <div className="col-md-6 text-center">
                          <Tooltip text="Monthly or annual payment depending on selected method">
                            <p className="pricing-label cursor-help">
                              {translations[language].periodicPayment} <span className="text-info">ℹ️</span>
                            </p>
                          </Tooltip>
                          <div className="price-primary">
                            {formatCurrency(quoteData.periodicAmount)}/{paymentMethod === 'monthly' ? 'mes' : 'año'}
                          </div>
                        </div>
                        <div className="col-md-6 text-center">
                          <Tooltip text="Complete first year cost including setup, integrations, recurring fees, and Colombian IVA (19%)">
                            <p className="pricing-label cursor-help">
                              {translations[language].totalAnnualCost} <span className="text-info">ℹ️</span>
                            </p>
                          </Tooltip>
                          <div className="price-success">
                            {formatCurrency(quoteData.totalCost)}
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <Tooltip text="30% of total project cost required upfront to begin development">
                          <p className="pricing-label-small cursor-help">
                            {translations[language].initialPaymentRequired}: <span className="text-warning">ℹ️</span>
                          </p>
                        </Tooltip>
                        <div className="price-warning">
                          {formatCurrency(quoteData.initialPayment)}
                        </div>
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="breakdown-section mt-4">
                      <h3 className="section-title mb-3">
                        <span className="breakdown-icon">📊</span>
                        {translations[language].breakdown}
                      </h3>
                      <div className="breakdown-card">
                        <div className="breakdown-list">
                          {quoteData.breakdown.map((item, index) => {
                            const isSubtotal = item.label.includes('Subtotal') || item.label.includes('subtotal');
                            const isTotal = item.label.includes('Total') || item.label.includes('total');
                            const isDiscount = item.amount < 0;
                            const isInitialPayment = item.label.includes('inicial') || item.label.includes('initial');

                            return (
                              <div
                                key={index}
                                className={`breakdown-item ${isTotal ? 'breakdown-total' :
                                  isSubtotal ? 'breakdown-subtotal' :
                                    isInitialPayment ? 'breakdown-payment' :
                                      isDiscount ? 'breakdown-discount' : 'breakdown-regular'
                                  }`}
                              >
                                <div className="breakdown-label">
                                  <span className="breakdown-icon-small">
                                    {isTotal ? '💰' :
                                      isSubtotal ? '📋' :
                                        isInitialPayment ? '🏦' :
                                          isDiscount ? '🏷️' : '📌'}
                                  </span>
                                  <span>{item.label}</span>
                                </div>
                                <div className="breakdown-amount">
                                  <span className={`amount-value ${isDiscount ? 'discount-amount' :
                                    isTotal ? 'total-amount' :
                                      isSubtotal ? 'subtotal-amount' :
                                        isInitialPayment ? 'payment-amount' : 'regular-amount'
                                    }`}>
                                    {item.amount < 0 ? '-' : ''}{formatCurrency(Math.abs(item.amount))}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Summary Card */}
                        <div className="breakdown-summary">
                          <div className="summary-row">
                            <span className="summary-label">
                              {language === 'es' ? '💵 Inversión Total del Primer Año:' : '💵 Total First Year Investment:'}
                            </span>
                            <span className="summary-amount total-highlight">
                              {formatCurrency(quoteData.totalCost)}
                            </span>
                          </div>
                          <div className="summary-row">
                            <span className="summary-label">
                              {language === 'es' ? '🚀 Para Comenzar (30%):' : '🚀 To Get Started (30%):'}
                            </span>
                            <span className="summary-amount payment-highlight">
                              {formatCurrency(quoteData.initialPayment)}
                            </span>
                          </div>
                          <div className="summary-note">
                            <small>
                              {language === 'es' ?
                                '💡 Incluye configuración, integraciones y primer año de servicio con IVA (19%)' :
                                '💡 Includes setup, integrations and first year of service with IVA (19%)'}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="features-section mt-4">
                      <h3 className="section-title mb-3">
                        {translations[language].features}
                      </h3>
                      <div className="features-list">
                        {quoteData.features.map((feature, index) => (
                          <div key={index} className="d-flex justify-content-between py-2 feature-item">
                            <span>{feature.name}</span>
                            <span className="feature-cost">{feature.cost === 'included' ? (language === 'es' ? 'Incluido' : 'Included') : feature.cost}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 mt-4">
                      <button
                        onClick={() => alert('PDF download functionality would be implemented here')}
                        className="btn btn-success px-4 py-2"
                      >
                        {translations[language].downloadPDF}
                      </button>
                      <button
                        onClick={() => {
                          localStorage.setItem('lmsQuote', JSON.stringify({ ...quoteData, timestamp: new Date().toISOString() }));
                          alert(language === 'es' ? 'Cotización guardada' : 'Quote saved');
                        }}
                        className="btn btn-info px-4 py-2"
                      >
                        {translations[language].saveQuote}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Custom CSS for LMS Pricing */}
            <style jsx>{`
              .lms-pricing-container {
                min-height: 100vh;
                background-color: var(--background-color);
                color: var(--default-color);
                font-family: var(--default-font);
              }
              
              .pricing-card {
                // background-color: var(--surface-color);
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              
              .main-heading h1 {
                color: var(--heading-color);
                font-family: var(--heading-font);
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 0;
              }
              
              .description-text {
                color: var(--default-color);
                opacity: 0.8;
              }
              
              .nav-tabs {
                border-bottom: 2px solid color-mix(in srgb, var(--heading-color), transparent 90%);
              }
              
              .nav-link {
                background: transparent;
                border: none !important;
                color: var(--default-color);
                padding: 0.75rem 1.5rem;
                margin-right: 0.25rem;
                border-radius: 0.375rem 0.375rem 0 0;
                transition: all 0.3s ease;
              }
              
              .nav-link:hover {
                background-color: var(--accent-color);
                color: var(--contrast-color);
                
              }
              
              .nav-link.active {
                background-color: var(--surface-color) !important;
                color: var(--accent-color)  !important;
                // border:var(--surface-color) 1px solid !important;
                border-bottom:var(--accent-color) 3px solid !important;
                
              }
              
              .form-label {
                color: var(--heading-color);
                font-weight: 500;
                margin-bottom: 0.5rem;
              }
              
              .form-select, .form-control {
                background-color: var(--background-color);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: var(--default-color);
                padding: 0.75rem;
                border-radius: 0.375rem;
                min-width: 150px;
              }
              
              .form-select:focus, .form-control:focus {
                border-color: var(--accent-color);
                box-shadow: 0 0 0 0.2rem rgba(227, 161, 39, 0.25);
                background-color: var(--background-color);
                color: var(--default-color);
              }
              
              .form-text {
                color: var(--default-color);
                opacity: 0.7;
                font-size: 0.875rem;
              }
              
              .form-check-input {
                background-color: var(--background-color);
                border: 1px solid rgba(255, 255, 255, 0.2);
              }
              
              .form-check-input:checked {
                background-color: var(--accent-color);
                border-color: var(--accent-color);
              }
              
              .form-check-label {
                color: var(--default-color);
              }
              
              .invalid-feedback {
                color: #dc3545;
              }
              
              .btn {
                border-radius: 0.375rem;
                font-weight: 500;
                transition: all 0.3s ease;
              }
              
              .btn-primary {
                background-color: var(--accent-color);
                border-color: var(--accent-color);
                color: var(--contrast-color);
              }
              
              .btn-primary:hover {
                background-color: color-mix(in srgb, var(--accent-color), transparent 15%);
                border-color: color-mix(in srgb, var(--accent-color), transparent 15%);
              }
              
              .btn-secondary {
                background-color: var(--surface-color);
                border-color: rgba(255, 255, 255, 0.2);
                color: var(--default-color);
              }
              
              .btn-secondary:hover {
                background-color: rgba(255, 255, 255, 0.1);
                color: var(--default-color);
              }
              
              .btn-success {
                background-color: #059652;
                border-color: #059652;
              }
              
              .btn-info {
                background-color: #17a2b8;
                border-color: #17a2b8;
              }
              
              .section-title {
                color: var(--heading-color);
                font-family: var(--heading-font);
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 1rem;
              }
              
              .integration-section {
                padding: 1rem;
                border-radius: 0.375rem;
                border: 1px solid rgba(255, 255, 255, 0.1);
              }
              
              .quote-results {
                background-color: var(--surface-color);
                border: 4px solid var(--accent-color);
                border-radius: 0.375rem;
              }
              
              .pricing-display-card {
                background-color: var(--background-color);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 0.5rem;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              
              .pricing-label {
                color: var(--default-color);
                opacity: 0.8;
                font-size: 0.875rem;
                margin-bottom: 0.25rem;
              }
              
              .pricing-label-small {
                color: var(--default-color);
                opacity: 0.7;
                font-size: 0.75rem;
              }
              
              .price-primary {
                font-size: 2rem;
                font-weight: 700;
                color: var(--accent-color);
              }
              
              .price-success {
                font-size: 2rem;
                font-weight: 700;
                color: #059652;
              }
              
              .price-warning {
                font-size: 1.25rem;
                font-weight: 600;
                color: #e3a127;
              }
              
              /* Enhanced Breakdown Styles */
              .breakdown-section {
                margin-top: 2rem;
              }
              
              .breakdown-icon {
                margin-right: 0.5rem;
                font-size: 1.2em;
              }
              
              .breakdown-card {
                background: linear-gradient(135deg, var(--surface-color) 0%, rgba(227, 161, 39, 0.05) 100%);
                border: 2px solid rgba(227, 161, 39, 0.2);
                border-radius: 12px;
                padding: 1.5rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              }
              
              .breakdown-list {
                margin-bottom: 1.5rem;
              }
              
              .breakdown-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem 1rem;
                margin-bottom: 0.5rem;
                border-radius: 8px;
                transition: all 0.3s ease;
                border-left: 4px solid transparent;
              }
              
              .breakdown-regular {
                background-color: rgba(255, 255, 255, 0.02);
                border-left-color: rgba(255, 255, 255, 0.2);
              }
              
              .breakdown-discount {
                background-color: rgba(40, 167, 69, 0.1);
                border-left-color: #28a745;
              }
              
              .breakdown-subtotal {
                background-color: rgba(227, 161, 39, 0.1);
                border-left-color: var(--accent-color);
                font-weight: 600;
              }
              
              .breakdown-total {
                background-color: rgba(40, 167, 69, 0.15);
                border-left-color: #059652;
                font-weight: 700;
                border: 2px solid rgba(40, 167, 69, 0.3);
              }
              
              .breakdown-payment {
                background-color: rgba(255, 193, 7, 0.1);
                border-left-color: #ffc107;
                font-weight: 600;
              }
              
              .breakdown-item:hover {
                transform: translateX(2px);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              }
              
              .breakdown-label {
                display: flex;
                align-items: center;
                color: var(--default-color);
                flex-grow: 1;
              }
              
              .breakdown-icon-small {
                margin-right: 0.5rem;
                font-size: 1em;
                opacity: 0.8;
              }
              
              .breakdown-amount {
                text-align: right;
                min-width: 120px;
              }
              
              .amount-value {
                font-weight: 600;
                font-size: 1rem;
              }
              
              .regular-amount {
                color: var(--default-color);
              }
              
              .discount-amount {
                color: #28a745;
              }
              
              .subtotal-amount {
                color: var(--accent-color);
                font-size: 1.1rem;
              }
              
              .total-amount {
                color: #059652;
                font-size: 1.2rem;
                font-weight: 700;
              }
              
              .payment-amount {
                color: #e3a127;
                font-size: 1.1rem;
              }
              
              /* Summary Card Styles */
              .breakdown-summary {
                background: linear-gradient(135deg, rgba(227, 161, 39, 0.1) 0%, rgba(227, 161, 39, 0.05) 100%);
                border: 1px solid rgba(227, 161, 39, 0.3);
                border-radius: 10px;
                padding: 1.25rem;
                margin-top: 1rem;
              }
              
              .summary-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.75rem;
                padding: 0.5rem 0;
              }
              
              .summary-label {
                color: var(--default-color);
                font-weight: 500;
                font-size: 1rem;
              }
              
              .summary-amount {
                font-weight: 700;
                font-size: 1.1rem;
              }
              
              .total-highlight {
                color: #059652;
                font-size: 1.3rem;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
              }
              
              .payment-highlight {
                color: #e3a127;
                font-size: 1.2rem;
              }
              
              .summary-note {
                text-align: center;
                margin-top: 1rem;
                padding-top: 1rem;
                border-top: 1px solid rgba(227, 161, 39, 0.2);
                color: var(--default-color);
                opacity: 0.8;
                font-style: italic;
              }
              
              .feature-item {
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                color: var(--default-color);
              }
              
              .feature-cost {
                color: var(--accent-color);
                font-weight: 500;
              }
              
              .cursor-help {
                cursor: help;
              }
              
              /* Tooltip Styles */
              .tooltip-wrapper {
                position: relative;
                display: inline-block;
              }
              
              .tooltip-content {
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 8px;
                padding: 8px 12px;
                background-color: rgba(0, 0, 0, 0.9);
                color: white;
                font-size: 12px;
                border-radius: 4px;
                white-space: nowrap;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
                z-index: 1000;
                pointer-events: none;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
              }
              
              .tooltip-wrapper:hover .tooltip-content {
                opacity: 1;
                visibility: visible;
              }
              
              .tooltip-arrow {
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid rgba(0, 0, 0, 0.9);
              }
              
              /* Ensure tooltips work properly in different contexts */
              .integration-options .tooltip-wrapper:hover .tooltip-content,
              .pricing-display-card .tooltip-wrapper:hover .tooltip-content {
                opacity: 1;
                visibility: visible;
              }

              .tab-content-section{
              background:black;
              padding:20px;
              border-radius:10px;
              }


            `}</style>
          </div>



        </div>

      </div>


    </section>












  );
};

export default LMSPricing;
