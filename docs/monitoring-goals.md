# Monitoring Goals

[^1]: System Availability
It must be ensured that all the critical components of the system are available 24/7
- API should have an availability of 0.999
- The camera system should have an availability of 0.989 %
- Database connectivity should have an availability of 0.9999

[^2]: System Reliability
The system must be built as specified with proper error-handling so that it works error-free
- To ensure that every API requests results in an error free response from the Server

[^3]: Data Integrity
It must be ensured that all the data is stored reliably and accurately.
- Backups should be created daily without fail(automated process)
- Periodic verification on whether backups can be restored should be done
- Ensure that the 20-30% of database space remains free

[^4]: Security
The system must be protected from unauthorized access and users privacy must be ensured
- Monitor the geographical location of the login attempt as a login attempt coming from an unusual location could pose a security risk
- Count the failed login attempts (multiple failed login attempts in a small time-frame could mean the sytem is being attacked)

[^5]: Performance
The sytem must operate efficiently.
- API should respond within less than 500 ms of the request being sent
- The video output should be stable and match the camera's FPS
- The services(Dashboard, incident reports) should take less than 3 seconds to load