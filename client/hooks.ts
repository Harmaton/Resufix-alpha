import { API_URL } from "@/config/config-dev";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ResumeAnalysisState {
  isLoading: boolean;
  result?: ResumeAnalysisPayload;
  error?: string;
}

const initialState: ResumeAnalysisState = {
  isLoading: false,
  error: "",
};

export const onAnalysis = createAsyncThunk(
  "resumeAnalysis/onAnalysis",
  async (file: File): Promise<ResumeAnalysisPayload> => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_URL}/api/analyze-resume`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(`Failed to analyze resume: ${res.status}`);
    }

    const result: ResumeAnalysisPayload = await res.json();
    
    return result;
  }
);

const resumeAnalysisSlice = createSlice({
  name: "resumeAnalysis",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(onAnalysis.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(onAnalysis.fulfilled, (state, action) => {
      state.isLoading = false;
      state.result = action.payload;
    });
    builder.addCase(onAnalysis.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const resumeAnalysisReducer = resumeAnalysisSlice.reducer;

export default resumeAnalysisSlice;
