// src/services/apiService.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getJobs = async () => {
  try {
    const response = await apiClient.get('/jobs');
    const jobs = response.data;
    jobs.sort((a, b) => b.id - a.id);
    return jobs
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const getJobById = async (id) => {
  try {
    const response = await apiClient.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
};

export const createJob = async (data) => {
  try {
    const response = await apiClient.post('/jobs', data);
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
};

export const getJobsLength = async () => {
  try {
    const response = await apiClient.get('/jobs');
    const jobs = response.data;

    const length = jobs.length;
    return length;
  } catch (error) {
    console.error('Error fetching jobs length:', error);
    throw error;
  }
};

export const updatePost = async (id, data) => {
  try {
    const response = await apiClient.put(`/jobs/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating job:', error);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await apiClient.delete(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting job:', error);
    throw error;
  }
};
