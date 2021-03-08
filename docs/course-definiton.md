Course fields
- Title: string
- Calendar: structure
  - Date: date
  - Start time: time
  - End time: time
- Url to SOS website: string # All textual info should be on SOS website (?)
- Teachers: User[] # A teacher must be a registered user

What should also be on the course for administration purposes
- Partecipants: User[]
- Workers: structure # Find a better name
  - User: User[]
  - Role: string # Or maybe we should have a "Role" class
