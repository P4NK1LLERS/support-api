require('dotenv').config();
const mongoose = require('mongoose');
const RequestType = require('../src/models/RequestType');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/support-api';

const data = [
  {
    code: 'TECH_ISSUE',
    name: 'Problème technique',
    description: 'Problème lié au matériel ou logiciel',
    priority: 'high',
    category: 'tech',
    estimatedResponseTime: 4
  },
  {
    code: 'BILL_QUERY',
    name: 'Question de facturation',
    description: 'Interrogation sur la facture ou paiement',
    priority: 'medium',
    category: 'billing',
    estimatedResponseTime: 24
  },
  {
    code: 'ACCOUNT_CHANGE',
    name: 'Demande de modification de compte',
    description: "Changement d'informations d'utilisateur",
    priority: 'low',
    category: 'account',
    estimatedResponseTime: 48
  },
  {
    code: 'FEATURE_REQUEST',
    name: 'Demande de fonctionnalité',
    description: 'Ajout de fonctionnalité souhaitée',
    priority: 'medium',
    category: 'request',
    estimatedResponseTime: 72
  },
  {
    code: 'COMPLAINT',
    name: 'Réclamation',
    description: 'Réclamation client',
    priority: 'critical',
    category: 'support',
    estimatedResponseTime: 8
  }
];

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    await RequestType.deleteMany({});
    await RequestType.insertMany(data);
    console.log('Seed done');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
