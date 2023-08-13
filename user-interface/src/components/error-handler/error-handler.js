export default function ErrorHandler({ error }) {
    return (
        <div class="App_error">
            <p>An error has occurred on this page. Below are the details. Please note that you can still navigate to other sections on this page.</p>
            <br />
            <pre>{error.message}</pre>
        </div>
    )
}
