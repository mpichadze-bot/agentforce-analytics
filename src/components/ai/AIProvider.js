import React, { createContext, useContext, useState, useCallback } from 'react';

// AI Context
const AIContext = createContext(null);

// Custom hook to use AI context
export const useAI = () => {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within an AIProvider');
  }
  return context;
};

// AI Service - Mock implementation (can be replaced with real API)
const AIService = {
  // Generate insights based on pain points data
  generateInsights: async (painPoints, customers) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const topPain = painPoints.sort((a, b) => b.customerCount - a.customerCount)[0];
    const totalCustomers = customers.length;
    const affectedPercentage = Math.round((topPain.customerCount / totalCustomers) * 100);
    
    return {
      keyInsight: `"${topPain.title}" affects ${affectedPercentage}% of your customers (${topPain.customerCount} of ${totalCustomers}). This should be your top priority.`,
      recommendation: `Focus on improving dashboard customization capabilities. Consider implementing user-defined filters, custom columns, and saved views to address the most common complaints.`,
      trend: `Pain points related to "Metrics & Data Issues" have been mentioned by ${painPoints.filter(p => p.theme === 'metrics').length} separate issue categories.`,
    };
  },

  // Search across pain points and customers
  search: async (query, painPoints, customers) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const lowerQuery = query.toLowerCase();
    
    const matchedPainPoints = painPoints.filter(p => 
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.customers.some(c => c.toLowerCase().includes(lowerQuery))
    );
    
    const matchedCustomers = customers.filter(c =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.tagline.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery)
    );
    
    return { painPoints: matchedPainPoints, customers: matchedCustomers };
  },

  // Chat with AI about the data
  chat: async (message, context) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const lowerMessage = message.toLowerCase();
    
    // Pattern matching for common queries
    if (lowerMessage.includes('how many') && lowerMessage.includes('customer')) {
      return `There are ${context.customers.length} customers in the system, with ${context.painPoints.length} documented pain points across 4 themes.`;
    }
    
    if (lowerMessage.includes('top') || lowerMessage.includes('biggest') || lowerMessage.includes('worst')) {
      const top = context.painPoints.sort((a, b) => b.customerCount - a.customerCount)[0];
      return `The biggest pain point is "${top.title}" affecting ${top.customerCount} customers. ${top.description}`;
    }
    
    if (lowerMessage.includes('metric') || lowerMessage.includes('data')) {
      const metricPains = context.painPoints.filter(p => p.theme === 'metrics');
      return `There are ${metricPains.length} issues related to metrics and data: ${metricPains.map(p => p.title).join(', ')}`;
    }
    
    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest') || lowerMessage.includes('priorit')) {
      return `Based on the data, I recommend prioritizing:\n1. Dashboard customization (14 customers)\n2. Custom report building (12 customers)\n3. Navigation improvements (10 customers)\n\nThese three issues affect the most customers and have the highest impact.`;
    }
    
    // Default response
    return `I can help you analyze pain points and customer feedback. Try asking about:\n• "What's the biggest pain point?"\n• "How many customers are affected by navigation issues?"\n• "What do you recommend prioritizing?"`;
  },

  // Get AI recommendations for a specific pain point
  getRecommendations: async (painPoint) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const recommendations = {
      'metrics': [
        'Implement metric definition tooltips on hover',
        'Add formula transparency for calculated fields',
        'Create a metrics glossary page',
        'Allow custom metric definitions per customer',
      ],
      'usability': [
        'Add breadcrumb navigation for drill-downs',
        'Implement saved views and favorites',
        'Create keyboard shortcuts for power users',
        'Add drag-and-drop column customization',
      ],
      'troubleshooting': [
        'Build session export functionality',
        'Add inline annotation capabilities',
        'Create root cause analysis wizard',
        'Implement batch tagging features',
      ],
      'functionality': [
        'Develop custom tagging system',
        'Create what-if simulation sandbox',
        'Build AI-powered insight summaries',
        'Add role-based PII masking',
      ],
    };
    
    return recommendations[painPoint.theme] || ['No specific recommendations available'];
  },
};

// AI Provider Component
export const AIProvider = ({ children, painPoints, customers }) => {
  const [isCommandBarOpen, setIsCommandBarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [insights, setInsights] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI analytics assistant. Ask me anything about the pain points and customer feedback.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Generate initial insights
  const loadInsights = useCallback(async () => {
    if (!painPoints || !customers) return;
    setIsLoading(true);
    try {
      const result = await AIService.generateInsights(painPoints, customers);
      setInsights(result);
    } catch (error) {
      console.error('Failed to load insights:', error);
    }
    setIsLoading(false);
  }, [painPoints, customers]);

  // Search handler
  const handleSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    const results = await AIService.search(query, painPoints, customers);
    setSearchResults(results);
  }, [painPoints, customers]);

  // Chat handler
  const sendMessage = useCallback(async (message) => {
    const userMessage = { role: 'user', content: message };
    setChatMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    try {
      const response = await AIService.chat(message, { painPoints, customers });
      const assistantMessage = { role: 'assistant', content: response };
      setChatMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    }
    setIsLoading(false);
  }, [painPoints, customers]);

  // Get recommendations for a pain point
  const getRecommendations = useCallback(async (painPoint) => {
    return await AIService.getRecommendations(painPoint);
  }, []);

  const value = {
    // State
    isCommandBarOpen,
    isChatOpen,
    searchResults,
    insights,
    chatMessages,
    isLoading,
    
    // Actions
    setIsCommandBarOpen,
    setIsChatOpen,
    handleSearch,
    sendMessage,
    loadInsights,
    getRecommendations,
  };

  return (
    <AIContext.Provider value={value}>
      {children}
    </AIContext.Provider>
  );
};

export default AIProvider;

