class Api::MessagesController < ApplicationController
  before_action do
    @message_thread = MessageThread.find(params[:message_thread_id])
  end

  def index
    @messages = @message_thread.messages
    if @messages.last
      if @messages.last.author_id != current_user.id
        @messages.last.read = true;
      end
    end
  end

  def create
    @message = @message_thread.messages.new(message_params)
    if @message.save
      render :show
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  def update
    @message = Message.find(params[:id])
    if @message.update_attributes(message_params)
      render :show
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy!
    render :show
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id)
  end
end
