import asyncio
import websockets
import json
from functioners import random_note_generator, get_notes_from_piano



chordsToPlay = 0
port_name = "Digital Piano-1 0"


#  data sent by user.
timeSignature = 0
clef = 0
difficulty = 0
key = 0
gameMode = 0  #  chords or single + key + difficulty


async def handler(websocket):
    try:
        notetoplay = "c4"
        while True:
            notePlayed = get_notes_from_piano(port_name)
            if notePlayed == "":
                event = {
                    "NoteToPlay": f"{notetoplay}",
                    "NotePlayed": None
                }
            elif notePlayed == notetoplay:
                await asyncio.sleep(0.3)
                notetoplay = random_note_generator()
                event = {
                    "NoteToPlay": f"{notetoplay}",
                    "NotePlayed": f"{notePlayed}"
                }
            else:
                event = {
                    "NoteToPlay": f"{notetoplay}",
                    "NotePlayed": f"{notePlayed}"
                }
            await websocket.send(json.dumps(event))
            await asyncio.sleep(0.1)
    except websockets.exceptions.ConnectionClosed:
        print("Connection closed")


async def main():
    async with websockets.serve(handler, "", 8001):
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
