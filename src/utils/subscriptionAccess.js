// Defines which routes each subscription level can access.
// 'guest'    = not logged in
// 'Basic'    = logged in, free tier
// 'Pro'      = paid mid tier
// 'Ultimate' = full access

export const PLAN_RANK = { guest: 0, Basic: 1, Pro: 2, Ultimate: 3 }

// Minimum plan required to visit each route path
export const ROUTE_ACCESS = {
  '/':          'guest',     // home — always visible
  '/about':     'guest',     // about — always visible
  '/auth':      'guest',     // auth page
  '/recipes':   'Basic',     // need to be logged in
  '/workouts':  'Basic',     // need to be logged in
  '/diet':      'Pro',       // Pro and above
  '/profile':   'Basic',     // need to be logged in
}

// Returns true if the user's plan meets the minimum required for a route
export const canAccess = (userPlan, routePath) => {
  const required = ROUTE_ACCESS[routePath] ?? 'Ultimate'
  const userRank = PLAN_RANK[userPlan ?? 'guest']
  const requiredRank = PLAN_RANK[required]
  return userRank >= requiredRank
}

// Human-readable label for the minimum plan needed
export const requiredPlanLabel = (routePath) => {
  return ROUTE_ACCESS[routePath] ?? 'Ultimate'
}
