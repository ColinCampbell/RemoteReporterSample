# ===========================================================================
# Project:   Unbugger
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :sample,
  :required => [:sproutcore, :remote_reporter]

proxy '/messages', :to => '127.0.0.1:3000'
proxy '/commands', :to => '127.0.0.1:3001'