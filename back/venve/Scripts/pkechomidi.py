#!C:\Users\augus\IdeaProjects\Insane Piano Time dela Partition\back\venve\Scripts\python.exe

import os
import sys
sys.path.append(os.path.join(os.getcwd(), 'tests'))
import rtmidi


def callback(collector, msg):
    print("%s: %s" % (collector.portName, msg))


collectors = rtmidi.CollectorBin()
collectors.start()
print('HIT ENTER TO EXIT')
try:
    sys.stdin.read(1)
except KeyboardInterrupt:
    pass
collectors.stop()
