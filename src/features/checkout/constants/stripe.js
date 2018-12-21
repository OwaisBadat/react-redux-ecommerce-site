const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
? 'sk_test_TUbSnGxjFRlZGm8mKkPVdy2a'
: 'pk_test_ycaenD63ZromtKXLiVLqepXG';

export default STRIPE_PUBLISHABLE;
