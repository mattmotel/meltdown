import { Email } from '@/types';

export const scenario: Record<string, Email> = {
  "start": {
    id: "start",
    from: "c.morgan@contractor.atomindustries.com",
    to: "HR@atomindustries.com",
    subject: "Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown 🚨",
    timestamp: "09:15 AM",
    content: "Hello,\n\nI need to address a critical and time-sensitive matter that could result in catastrophic consequences. Our nuclear plant is on the verge of a meltdown, and the key to its stability lies in our vital AWS EC2 instance managed by former employee Ethan Reynolds...",
    urgent: true,
    choices: [
      {
        id: "formal_response",
        text: "Send formal response promising 24-48 hour update",
        nextEmailId: "hr_first_response",
        consequence: {
          type: "temperature",
          value: 35
        }
      },
      {
        id: "immediate_call",
        text: "Call Casey immediately",
        nextEmailId: "alternative_path_1"
      }
    ]
  },

  "hr_first_response": {
    id: "hr_first_response",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown 🚨",
    timestamp: "11:30 AM",
    content: "Hey Casey,\n\nThank you for bringing this urgent matter to our attention...",
    choices: [
      {
        id: "wait_for_casey",
        text: "Wait for Casey's response",
        nextEmailId: "casey_urgent_reply",
        consequence: {
          type: "pressure",
          value: 150
        }
      },
      {
        id: "search_records",
        text: "Start searching for Ethan's records immediately",
        nextEmailId: "records_search"
      }
    ]
  },

  "casey_urgent_reply": {
    id: "casey_urgent_reply",
    from: "c.morgan@contractor.atomindustries.com",
    to: "HR@atomindustries.com",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown 🚨",
    timestamp: "11:45 AM",
    content: "Jessica,\nWhile I appreciate your response, the urgency of this situation cannot be overstated. Lives hang in the balance...",
    urgent: true,
    choices: [
      {
        id: "escalate_supervisor",
        text: "Escalate to supervisor",
        nextEmailId: "supervisor_response",
        consequence: {
          type: "temperature",
          value: 45
        }
      },
      {
        id: "call_casey",
        text: "Finally call Casey's number",
        nextEmailId: "direct_contact"
      }
    ]
  },

  "supervisor_response": {
    id: "supervisor_response",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    timestamp: "2:30 PM",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown 🚨",
    content: "Casey,\n\nI would like to update you on the progress we've made regarding the critical situation at hand. As you know, following the acquisition of Atom Industries by Bane Capital...",
    choices: [
      {
        id: "follow_protocol",
        text: "Follow proper protocols and wait",
        nextEmailId: "system_failure",
        consequence: {
          type: "containment",
          value: false
        }
      },
      {
        id: "emergency_override",
        text: "Implement emergency override procedures",
        nextEmailId: "last_chance"
      }
    ]
  },

  "system_failure": {
    id: "system_failure",
    from: "AWS@automated.response",
    to: "ALL_USERS",
    subject: "SYSTEM FAILURE - AUTOMATED RESPONSE",
    timestamp: "4:45 PM",
    urgent: true,
    content: "Your email to c.morgan@contractor.atomindustries.com could not be delivered. Please update your billing details with AWS immediately to prevent further service interruption...",
    choices: [
      {
        id: "game_over",
        text: "View Automated Response",
        nextEmailId: "meltdown_ending",
        consequence: {
          type: "temperature",
          value: 999
        }
      }
    ]
  },

  "meltdown_ending": {
    id: "meltdown_ending",
    from: "SYSTEM",
    to: "ALL_USERS",
    subject: "CONNECTION TERMINATED",
    timestamp: "5:00 PM",
    urgent: true,
    content: "CRITICAL SYSTEM FAILURE\nALL CONNECTIONS TERMINATED\nEVACUATION PROTOCOLS INITIATED\n\n[GAME OVER - The $4.99 AWS bill remained unpaid]",
    choices: [
      {
        id: "restart",
        text: "Restart from beginning",
        nextEmailId: "start"
      }
    ]
  },

  "alternative_path_1": {
    id: "alternative_path_1",
    from: "SYSTEM",
    to: "ALL_USERS",
    subject: "Call Attempted",
    timestamp: "9:30 AM",
    content: "Call failed to connect. Phone systems appear to be affected by the AWS outage...",
    urgent: true,
    choices: [
      {
        id: "return_to_email",
        text: "Return to email communication",
        nextEmailId: "hr_first_response",
        consequence: {
          type: "temperature",
          value: 40
        }
      }
    ]
  }
}; 