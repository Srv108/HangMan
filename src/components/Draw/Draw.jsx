function Draw(){
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Your Popup Title</h2>
                <p className="mb-4">This is your popup content. You can place any content here.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
            </div>
        </div>
    );
}