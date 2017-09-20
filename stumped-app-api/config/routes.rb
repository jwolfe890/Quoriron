Rails.application.routes.draw do
  namespace :api do
    resources :questions
  end
end
