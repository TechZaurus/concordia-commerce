import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/health', () => {
    return HttpResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
    });
  }),

  http.get('/api/stats', () => {
    return HttpResponse.json({
      totalSales: 15430,
      activeUsers: 1205,
      conversionRate: 3.2,
    });
  }),

  http.get('/api/user/current', () => {
    return HttpResponse.json({
      id: 'user_123',
      name: 'John',
      surname: 'Johnson',
      profileImageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    });
  }),
];
