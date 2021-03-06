require 'spec_helper'

describe Icalendar::Todo do

  describe '#dtstart' do
    it 'is not normally required' do
      subject.dtstart = nil
      subject.should be_valid
    end

    context 'with duration set' do
      before(:each) { subject.duration = 'PT15M' }

      it 'is invalid if not set' do
        subject.should_not be_valid
      end

      it 'is valid when set' do
        subject.dtstart = Date.today
        subject.should be_valid
      end
    end
  end
end