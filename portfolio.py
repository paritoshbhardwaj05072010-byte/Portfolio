from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser


def run() -> None:
    base_dir = Path(__file__).resolve().parent
    port = 8000

    # Serve files from this folder so portfolio.html and portfolio.css are available.
    handler = lambda *args, **kwargs: SimpleHTTPRequestHandler(
        *args, directory=str(base_dir), **kwargs
    )
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)

    print(f"Portfolio is running at http://127.0.0.1:{port}/portfolio.html")
    print("Press Ctrl+C to stop.")
    webbrowser.open(f"http://127.0.0.1:{port}/portfolio.html")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
    finally:
        server.server_close()


if __name__ == "__main__":
    run()
