#!/usr/bin/env node

/**
 * MongoDB Connection Test Script
 * Run this to diagnose MongoDB connection issues
 */

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
const envPath = path.join(__dirname, '../.env.local');
let MONGODB_URI = '';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/MONGODB_URI=(.+)/);
  if (match) {
    MONGODB_URI = match[1].trim();
  }
}

console.log('🔍 MongoDB Connection Diagnostic Tool');
console.log('=====================================\n');

console.log('📋 Environment Check:');
console.log(`   MONGODB_URI: ${MONGODB_URI ? '✅ Set' : '❌ Not set'}`);
if (MONGODB_URI) {
  console.log(`   Connection String: ${MONGODB_URI.substring(0, 50)}...`);
}
console.log();

async function testConnection() {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not configured in .env.local');
    }

    console.log('⏳ Attempting to connect to MongoDB...');
    console.log('   Timeout: 10 seconds');
    console.log();

    const connection = await mongoose.connect(MONGODB_URI, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 10000,
      retryWrites: true,
    });

    console.log('✅ SUCCESS! MongoDB connection established');
    console.log();
    console.log('📊 Connection Details:');
    console.log(`   Host: ${connection.connection.host}`);
    console.log(`   Port: ${connection.connection.port}`);
    console.log(`   Database: ${connection.connection.db.databaseName}`);
    console.log();

    await connection.disconnect();
    console.log('🔌 Disconnected');
    process.exit(0);
  } catch (error) {
    console.log('❌ CONNECTION FAILED\n');
    console.log('Error Details:');
    console.log(`   Code: ${error.code || 'N/A'}`);
    console.log(`   Message: ${error.message}`);
    console.log();

    // Diagnose the issue
    if (error.message.includes('ECONNREFUSED')) {
      console.log('🔧 Diagnosis: MongoDB is not running or unreachable');
      console.log();
      console.log('Solutions:');
      console.log('1. For MongoDB Atlas (Cloud):');
      console.log('   - Check your IP is whitelisted (go to Network Access)');
      console.log('   - Add 0.0.0.0/0 for development (not recommended for production)');
      console.log('   - Verify connection string has correct password');
      console.log('   - Check internet connection');
      console.log();
      console.log('2. For Local MongoDB:');
      console.log('   - Start MongoDB: mongod --dbpath ~/data/mongodb');
      console.log('   - Or use Docker: docker run -d -p 27017:27017 mongo');
      console.log();
    } else if (error.message.includes('authentication failed')) {
      console.log('🔧 Diagnosis: Authentication failed');
      console.log();
      console.log('Solutions:');
      console.log('1. Verify username and password in connection string');
      console.log('2. Check for special characters in password (URL encode them)');
      console.log('3. Confirm user exists in MongoDB Atlas');
      console.log();
    } else if (error.message.includes('getaddrinfo')) {
      console.log('🔧 Diagnosis: Cannot resolve hostname');
      console.log();
      console.log('Solutions:');
      console.log('1. Check internet connection');
      console.log('2. Verify MongoDB Atlas cluster URL is correct');
      console.log('3. Check DNS settings');
      console.log();
    } else if (error.message.includes('not configured')) {
      console.log('🔧 Diagnosis: MongoDB connection string is missing');
      console.log();
      console.log('Solution:');
      console.log('1. Create .env.local in the project root');
      console.log('2. Add MONGODB_URI=mongodb+srv://... or your local Mongo URI');
      console.log('3. Restart the Next.js dev server');
      console.log();
    }

    process.exit(1);
  }
}

testConnection();
