require "test_helper"

class GreetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get greeting" do
    get greetings_greeting_url
    assert_response :success
  end
end
