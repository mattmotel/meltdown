import { Email } from '@/types';

export const scenario: Record<string, Email> = {
  "start": {
    id: "start",
    from: "c.morgan@contractor.atomindustries.com",
    to: "HR@atomindustries.com",
    subject: "Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown",
    timestamp: "09:15 AM",
    content: `Hello,

I need to address a critical and time-sensitive matter that could result in catastrophic consequences. Our nuclear plant is on the verge of a meltdown, and the key to its stability lies in our vital AWS EC2 instance managed by former employee Ethan Reynolds.

Ethan was the sole member of the DevOps and Data Recovery team. Unfortunately, his corporate card associated with the account has been terminated, preventing us from paying the outstanding bill of $4.99. Unless we regain access and update the payment information, our AWS services will be abruptly shut down, putting the entire plant at risk of a devastating nuclear disaster.

It is alarming that Ethan, the only individual with the necessary credentials, is no longer part of our team. Further, my attempts to locate HR's contact information have been fruitless. I implore you to respond promptly to this email with your cell phone number. We need to engage in an urgent conversation to strategize and take the necessary steps to avert this impending crisis.

I cannot stress enough the urgency of this matter. Please treat it with the utmost seriousness, dedicating all available resources to finding a solution without delay.

Best regards,
Casey Morgan // Contractor`,
    urgent: true,
    choices: [
      {
        id: "hr_response",
        text: "Send email to HR",
        nextEmailId: "hr_first_response",
        consequence: {
          type: "temperature",
          value: 35
        }
      },
      {
        id: "email_boss",
        text: "Email plant manager directly",
        nextEmailId: "boss_response"
      }
    ]
  },

  "hr_first_response": {
    id: "hr_first_response",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown",
    timestamp: "11:30 AM",
    content: `Hey Casey,

Thank you for bringing this urgent matter to our attention.

Rest assured, we are wholeheartedly committed to resolving this issue promptly. Our investigation into Ethan Reynolds' departure is underway.

We will provide you with a comprehensive update within the next 24-48 hours, outlining our plans to rectify the situation and mitigate any potential risks. Efforts are already in motion to expedite the search for Ethan Reynolds and the retrieval of the necessary password.

Thank you for your vigilance and cooperation in this matter. We assure you that the safety of our employees and the wider community is our utmost priority, and we are sparing no effort to prevent a looming catastrophe.

Best,
Jessica Bronson / HR Consultant`,
    choices: [
      {
        id: "urgent_reply",
        text: "Wait for HR response",
        nextEmailId: "casey_urgent_reply"
      },
      {
        id: "try_it_department",
        text: "Contact IT department",
        nextEmailId: "it_response"
      }
    ]
  },

  "casey_urgent_reply": {
    id: "casey_urgent_reply",
    from: "c.morgan@contractor.atomindustries.com",
    to: "HR@atomindustries.com",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown",
    timestamp: "11:45 AM",
    content: `Jessica,

While I appreciate your response, the urgency of this situation cannot be overstated. Lives hang in the balance.

I implore you to call me without delay at 413-555-9878 so that we can discuss this matter further and explore all available options for a swift resolution.

Regards,
Casey`,
    urgent: true,
    choices: [
      {
        id: "no_records",
        text: "Send email to HR",
        nextEmailId: "records_not_found",
        consequence: {
          type: "temperature",
          value: 45
        }
      },
      {
        id: "try_security",
        text: "Contact facility security",
        nextEmailId: "security_response"
      }
    ]
  },

  "records_not_found": {
    id: "records_not_found",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    timestamp: "1:30 PM",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown",
    content: `Casey,

We sincerely apologize for any inconvenience caused. Regrettably, we have been unable to locate any employment records or contact details pertaining to Ethan Reynolds within our systems. Rest assured, I am escalating this matter to my supervisor, and we anticipate providing you with a comprehensive update within 48-72 hours.

We appreciate your patience and cooperation as we allocate additional resources and intensify our efforts to expedite the search for Ethan Reynolds. We are fully committed to rectifying this predicament to ensure the safety of our operations.

Best regards,
Jessica Bronson
HR Consultant`,
    choices: [
      {
        id: "albert_update",
        text: "Wait for email",
        nextEmailId: "albert_migration_update",
        consequence: {
          type: "temperature",
          value: 50
        }
      },
      {
        id: "try_accounting",
        text: "Contact accounting about payment",
        nextEmailId: "accounting_response"
      }
    ]
  },

  "albert_migration_update": {
    id: "albert_migration_update",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    timestamp: "2:30 PM",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown",
    content: `Casey,

I would like to update you on the progress we've made regarding the critical situation at hand. As you know, following the acquisition of Atom Industries by Bane Capital, we have been in the process of migrating employee records. Unfortunately, it appears that some of these records have been lost in the transition.

We are in touch with the Data Recovery team to further handle this matter.

Best regards,
Albert Sampson / HR Consultant`,
    choices: [
      {
        id: "urgent_hours",
        text: "Write urgent warning",
        nextEmailId: "mere_hours_warning"
      },
      {
        id: "contact_aws",
        text: "Try contacting AWS support directly",
        nextEmailId: "aws_support_response"
      }
    ]
  },

  "mere_hours_warning": {
    id: "mere_hours_warning",
    from: "c.morgan@contractor.atomindustries.com",
    to: "HR@atomindustries.com",
    subject: "URGENT: AWS Shutdown and Potential Nuclear Meltdown Imminent",
    timestamp: "3:15 PM",
    content: `Albert,

We have mere hours to resolve this matter. Failure to act will result in not just a halt of operations but a complete global catastrophe. Call me urgently at 413-555-9878.

Casey`,
    urgent: true,
    choices: [
      {
        id: "policy_response",
        text: "Send response",
        nextEmailId: "written_policy_response",
        consequence: {
          type: "temperature",
          value: 60
        }
      }
    ]
  },

  "written_policy_response": {
    id: "written_policy_response",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: URGENT: AWS Shutdown and Potential Nuclear Meltdown Imminent",
    timestamp: "3:45 PM",
    content: `Casey,

We deeply appreciate your persistence and cooperation throughout this matter. However, we are unable to comply with your request for a phone call, as corporate policies mandate that all matters be handled in writing for auditing purposes. We trust you can understand the importance of adhering to these protocols.

Rest assured, we are taking all necessary steps to rectify the situation and ensure the safety of our operations. We anticipate an update within the next 72-96 hours.

Sincerely,
Albert Sampson / HR Consultant`,
    choices: [
      {
        id: "password_found",
        text: "Write response",
        nextEmailId: "password_recovery",
        consequence: {
          type: "pressure",
          value: 180
        }
      }
    ]
  },

  "password_recovery": {
    id: "password_recovery",
    from: "c.morgan@contractor.atomindustries.com",
    to: "HR@atomindustries.com",
    subject: "URGENT: AWS Shutdown and Potential Nuclear Meltdown Imminent",
    timestamp: "4:15 PM",
    content: `Albert,

I have managed to recover the password for the AWS EC2 instance! I just need you to urgently approve a $4.99 expense on my corporate card. Please respond immediately!

Casey`,
    urgent: true,
    choices: [
      {
        id: "expense_approval",
        text: "Send expense for approval",
        nextEmailId: "expense_response",
        consequence: {
          type: "temperature",
          value: 80
        }
      }
    ]
  },

  "expense_response": {
    id: "expense_response",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: URGENT: AWS Shutdown and Potential Nuclear Meltdown Imminent",
    timestamp: "4:30 PM",
    content: `Casey,

Thank you for the update. It seems that you have managed to recover the password for the AWS EC2 instance, possibly preventing a catastrophic global disaster. Bravo! However, we regret to inform you that approval from a manager is required for any unanticipated expenses, including the $4.99 expense on your corporate card. Please ask your manager to fill out form AG81923, requesting written approval no later than the end of the week.

We appreciate your cooperation and swift action in resolving this matter. If you have any further concerns or questions, please feel free to reach out.

Sincerely,
Albert Sampson / HR Consultant`,
    choices: [
      {
        id: "aws_failure",
        text: "Run!",
        nextEmailId: "aws_failure_notice",
        consequence: {
          type: "containment",
          value: false
        }
      },
      {
        id: "try_own_card",
        text: "Try using your personal credit card",
        nextEmailId: "credit_card_declined"
      }
    ]
  },

  "aws_failure_notice": {
    id: "aws_failure_notice",
    from: "c.morgan@contractor.atomindustries.com",
    to: "HR@atomindustries.com",
    subject: "Re: URGENT: AWS Shutdown and Potential Nuclear Meltdown Imminent",
    timestamp: "4:45 PM",
    content: `Your email to c.morgan@contractor.atomindustries.com could not be delivered. Please update your billing details with AWS immediately to prevent further service interruption.

This is an automated response from AWS.`,
    urgent: true,
    choices: [
      {
        id: "final_response",
        text: "Dear Father who art in heaven, please have mercy on my poor soul",
        nextEmailId: "final_automated_response",
        consequence: {
          type: "temperature",
          value: 999
        }
      }
    ]
  },

  "final_automated_response": {
    id: "final_automated_response",
    from: "HR@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: URGENT: AWS Shutdown and Potential Nuclear Meltdown Imminent",
    timestamp: "5:00 PM",
    content: `Based on the latest update we received, our system has determined that this issue has been resolved.

We appreciate your prompt attention to this matter. If you have any additional concerns or require further assistance, please do not hesitate to reach out.

This is an automated response.`,
    choices: [
      {
        id: "restart",
        text: "What is that bright light in the distance? Should I walk towards it? The warmth feels so inviting... ",
        nextEmailId: "start"
      }
    ]
  },

  "boss_response": {
    id: "boss_response",
    from: "m.johnson@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: Former Employee Holds Key to Prevent AWS Shutdown and Potential Nuclear Meltdown",
    timestamp: "10:00 AM",
    content: `Casey,

Thank you for bringing this to my attention. However, I'm not familiar with the AWS systems or this Ethan person. Have you tried reaching out to Jessica in HR? She's our consultant handling all personnel matters.

Please coordinate with HR on this.

Regards,
Mark Johnson
Plant Manager`,
    choices: [
      {
        id: "back_to_hr",
        text: "Contact HR as suggested",
        nextEmailId: "hr_first_response"
      }
    ]
  },

  "it_response": {
    id: "it_response",
    from: "it.support@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: AWS Access Request",
    timestamp: "11:15 AM",
    content: `Hi Casey,

All AWS account management is handled through HR. Please submit your request through the proper channels by contacting Jessica Bronson in HR.

Best regards,
IT Support`,
    choices: [
      {
        id: "back_to_hr_again",
        text: "Return to HR process",
        nextEmailId: "casey_urgent_reply"
      }
    ]
  },

  "security_response": {
    id: "security_response",
    from: "security@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: URGENT: Security Access Request",
    timestamp: "12:00 PM",
    content: `Dear Casey,

All employee access and credential matters must be handled through HR. Please contact Jessica Bronson in HR to process your request.

Security Team`,
    choices: [
      {
        id: "back_to_hr_security",
        text: "Return to HR as directed",
        nextEmailId: "records_not_found"
      }
    ]
  },

  "accounting_response": {
    id: "accounting_response",
    from: "accounts@atomindustries.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: Urgent Payment Request",
    timestamp: "1:45 PM",
    content: `Hi Casey,

All expense approvals must be processed through HR first. Please work with Jessica Bronson to submit the proper documentation.

Accounting Department`,
    choices: [
      {
        id: "back_to_hr_accounting",
        text: "Contact HR about expense approval",
        nextEmailId: "albert_migration_update"
      }
    ]
  },

  "aws_support_response": {
    id: "aws_support_response",
    from: "no-reply@aws.amazon.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Re: Account Access Request",
    timestamp: "2:45 PM",
    content: `Hello,

For security reasons, we can only process account access requests through your organization's designated HR representative.

AWS Support Team`,
    choices: [
      {
        id: "back_to_hr_aws",
        text: "Return to HR process",
        nextEmailId: "mere_hours_warning"
      }
    ]
  },

  "credit_card_declined": {
    id: "credit_card_declined",
    from: "no-reply@aws.amazon.com",
    to: "c.morgan@contractor.atomindustries.com",
    subject: "Payment Declined - AWS Account",
    timestamp: "4:40 PM",
    content: `Payment Authorization Failed

We were unable to process your payment. The billing address provided does not match the address on file for this AWS account.

For security reasons, the billing address must match the original account holder's address. Please contact your organization's HR department to update billing information.

AWS Billing Team`,
    choices: [
      {
        id: "run_faster",
        text: "RUN FASTER!",
        nextEmailId: "aws_failure_notice",
        consequence: {
          type: "temperature",
          value: 95
        }
      }
    ]
  }
}; 

