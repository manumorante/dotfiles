#!/usr/bin/env python3

# How to use this script?
# It's a template which needs further setup. Duplicate the file,
# remove `.template.` from the filename and set an Personal access token as
# well as the GitLab instance url if it is not gitlab.com in gitlabconfig.py
# You need to copy gitlabconfig.py and gitlabhelper.py next to the script command
# otherwise it won't work. gitlabconfig.py and gitlabhelper.py are shared between
# all gitlab script commands.
#
# API: https://docs.gitlab.com/ee/api


# Parameters

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Merge Requests
# @raycast.mode fullOutput

# Optional parameters:
# @raycast.packageName GitLab
# @raycast.icon images/gitlab.png

# Documentation:
# @raycast.author Michael Aigner
# @raycast.authorURL https://github.com/tonka3000
# @raycast.description Show merge requests from GitLab

# Configuration: see gitlabconfig.py

# Main program

from gitlabhelper import GitLab
import textwrap

gitlab = GitLab()

data = gitlab.get_call("merge_requests?state=opened&author_username=manu.morante")

for e in data:
  created_at = e.get("created_at")
  title = e.get("title")
  state = e.get("state")
  web_url = e.get("web_url")
  author = e.get("author")
  target_branch = e.get("target_branch")
  name = author.get("name")
  username = author.get("username")
  description = textwrap.shorten(e.get("description"), width=420, placeholder="...")
  labels = e.get("labels")

  print(f"🔃 {title}")
  print(f"{name} -> {target_branch}")
  print(f"{web_url}\n\n")

# print(f"{data}")