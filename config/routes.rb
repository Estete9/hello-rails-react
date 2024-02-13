Rails.application.routes.draw do
  get 'greetings/greeting'
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :greetings do
        collection do
          get :random_greeting
        end
      end
    end
  end

  root to: "greetings#root"
end
