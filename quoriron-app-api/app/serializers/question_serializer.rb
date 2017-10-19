class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :details

  has_many :answers
end
