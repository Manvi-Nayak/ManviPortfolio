import { describe, test } from 'bun:test';
import { deepStrictEqual, equal } from 'node:assert/strict';
import { PROJECTS } from '../src/data/projects';
import { MILESTONES } from '../src/data/journey';
import { WORKSPACES } from '../src/data/workspaces';
describe('portfolio constraints', () => {
  test('six workspaces in notebook order', () => deepStrictEqual(WORKSPACES.map(w => w.id), ['home','about','journey','skills','projects','contact']));
  test('exactly five projects', () => deepStrictEqual(PROJECTS.map(p => p.name), ['Mahakumbh','Last-Mile Delivery Tracker','TalkEase','PCOS IntelliDetect','Customer Churn Prediction']));
  test('verified repositories owned by Manvi-Nayak', () => deepStrictEqual(PROJECTS.map(p => p.githubUrl), ['Mahakumbh-AI-Powered-ERCP','last-mile-delivery','TalkEase','PCOS-IntelliDetect','Customer-Churn-Prediction'].map(r => `https://github.com/Manvi-Nayak/${r}`)));
  test('exact technology stacks', () => deepStrictEqual(PROJECTS.map(p => p.technologies), [['React.js','FastAPI','Gemini API','WebSockets','SQLite'],['React.js','Node.js','Express.js','MySQL','REST APIs'],['JavaScript','FastAPI','Firebase','WebSockets','Hugging Face'],['Python','Scikit-learn','TensorFlow','Pandas','Flask'],['Python','Pandas','Scikit-learn','Machine Learning']]));
  test('progression only in 2025 and 2026', () => { for (const m of MILESTONES.filter(m => m.id === 'build' || m.id === 'now')) { deepStrictEqual(Object.keys(m).sort(), ['id','year','title','lead','support'].sort()); } equal(MILESTONES.find(m => m.id === 'now')?.year, '2026'); });
});
